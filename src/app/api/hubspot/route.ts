import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "HubSpot not configured" },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { name, email, slug, ref } = body;

  if (!email || !name) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  // Search for existing contact by email
  const searchRes = await fetch(
    "https://api.hubapi.com/crm/v3/objects/contacts/search",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              { propertyName: "email", operator: "EQ", value: email },
            ],
          },
        ],
      }),
    }
  );

  const searchData = await searchRes.json();
  const existingContact = searchData.results?.[0];

  const properties: Record<string, string> = {
    firstname: name,
    email,
    lifecyclestage: "lead",
  };

  // Set custom properties if provided
  if (ref) properties.manychat_keyword = ref;
  if (slug) properties.first_guide = slug;
  properties.lead_source = "manychat";

  if (existingContact) {
    // Update existing contact
    const updateRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${existingContact.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (!updateRes.ok) {
      const err = await updateRes.json().catch(() => ({}));
      console.error("HubSpot update error:", err);
      // Still allow access even if HubSpot fails
      return NextResponse.json({ ok: true });
    }
  } else {
    // Create new contact
    const createRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (!createRes.ok) {
      const err = await createRes.json().catch(() => ({}));
      console.error("HubSpot create error:", err);
      // Still allow access even if HubSpot fails
      return NextResponse.json({ ok: true });
    }
  }

  return NextResponse.json({ ok: true });
}
