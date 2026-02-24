import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { yt_html } from '../assets/assets';

const YtPreview = () => {

  // Read query parameters from URL
  // Example:
  // /preview?thumbnail_url=img.jpg&title=AI Thumbnail
  const [searchParams] = useSearchParams();

  // Extract thumbnail image URL from query params
  const thumbnail_url = searchParams.get("thumbnail_url")

  // Extract title from query params
  const title = searchParams.get("title")

  // Replace placeholder values inside HTML template
  // %%THUMBNAIL_URL%% → actual image URL
  // %%TITLE%% → actual title
  const new_html = yt_html
    .replace('%%THUMBNAIL_URL%%', thumbnail_url)
    .replace("%%TITLE%%", title)

  return (
    // Full screen preview container
    // fixed + inset-0 makes it cover entire viewport
    <div className='fixed inset-0 bg-black z-100'>

      {/* 
        iframe renders dynamic HTML content.
        srcDoc allows injecting raw HTML instead of loading a URL.
        This keeps preview isolated from React styles.
      */}
      <iframe
        srcDoc={new_html}
        width={"100%"}
        height={"100%"}
        allowFullScreen
      ></iframe>

    </div>
  )
}

export default YtPreview
