import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import Image from 'next/image';

export const config = {
  runtime: 'edge',
};

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    // ?title=<des>
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';
    const hasDescription = searchParams.has('description');
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : ' sample description';
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            backgroundImage: "linear-gradient(135deg, #7856ff 10%, #0016d9 100%)",
            color: "#7856ff",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "3rem 4rem 2.5rem",
              backgroundColor: "#000021",
              justifyContent: "space-between",
              borderRadius: "10px",
              width: "100%",
              height: "90%",
            }}>
            <p style={{ fontSize: 60, fontWeight: 700, color: "#fff" }}>
              {title}
            </p>
            <span style={{ height: 200 }} />
            <p style={{ fontSize: 36, fontWeight: 700, color: "#ffffffc0" }}>
              {description}
            </p>
            <p style={{ fontSize: 40, fontWeight: 500 }}>VX | development by VARIUS</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}