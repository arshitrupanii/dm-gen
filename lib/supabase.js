import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to create a user record in the users table
export async function createUserRecord(userId, email) {
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        auth_user_id: userId,
        email: email,
        last_login: new Date().toISOString()
      }
    ])
    .select()

  if (error) {
    console.error('Error creating user record:', error)
    throw error
  }

  return data
} 