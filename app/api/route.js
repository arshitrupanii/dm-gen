import { createClient } from "utils/supabase/server";

export async function GET(request) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return Response.json({ error: 'User ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('user_details')
      .select()
      .eq('user_id', userId)
      .single();

    if (error) throw error;

    return Response.json({
      fullName: data?.full_name || '',
      jobTitle: data?.job_title || '',
      companyName: data?.company_name || '',
      experienceLevel: data?.experience_level || 'beginner'
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const supabase = createClient();

    // Validate required fields
    if (!data.userId || !data.fullName || !data.jobTitle) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('user_details')
      .upsert({
        user_id: data.userId,
        full_name: data.fullName,
        job_title: data.jobTitle,
        company_name: data.companyName || null,
        experience_level: data.experienceLevel || 'beginner',
        updated_at: new Date().toISOString()
      });

    if (error) throw error;

    return Response.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Failed to save user details' },
      { status: 500 }
    );
  }
}