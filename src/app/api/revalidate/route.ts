import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Vercel Cron (optional security)
    const authHeader = request.headers.get("authorization");
    const token = process.env.CRON_SECRET;

    if (token && authHeader !== `Bearer ${token}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Revalidate the stats page
    revalidatePath("/stats");

    console.log("✅ Stats page revalidated successfully");

    return NextResponse.json({
      message: "Stats page revalidated successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Error revalidating stats page:", error);

    return NextResponse.json(
      {
        message: "Error revalidating stats page",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Also support GET for manual testing
export async function GET() {
  try {
    revalidatePath("/stats");

    return NextResponse.json({
      message: "Stats page revalidated manually",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error revalidating stats page",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
