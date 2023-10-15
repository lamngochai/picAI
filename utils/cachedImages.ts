import cloudinary from './cloudinary'
import { createClient } from '@supabase/supabase-js'
let cachedResults
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)
export default async function getResults() {
  if (!cachedResults) {
    // const fetchedResults = await cloudinary.v2.search
    //   .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    //   .sort_by('public_id', 'desc')
    //   .max_results(400)
    //   .execute()
    const fetchedResults =  await supabase
.from('pictures')
.select('*').eq('id', '1')
    cachedResults = fetchedResults
  }

  return cachedResults
}
