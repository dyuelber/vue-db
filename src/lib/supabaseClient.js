
import { createClient } from '@supabase/supabase-js'

const databaseUrl = 'https://sabyixsycrlrvpmxeusw.supabase.co'
const databaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhYnlpeHN5Y3JscnZwbXhldXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NTExMzAsImV4cCI6MjAyMTMyNzEzMH0.SPI5slWyBdvhZInwTcCZOiihwlZ9ieUoBFJSagEGkLk'

export const supabase = createClient(databaseUrl, databaseKey)