import HeadData from 'next/head'

import { meta } from 'utils/constants/data'

export default function Head() {
  return (
    <HeadData>
      <title>{meta.TITLE}</title>
      <meta
        name='description'
        content={meta.DESCRIPTION}
      />
      <meta
        name='keywords'
        content={meta.KEYWORDS}
      />
      <link
        rel='icon'
        href='/favicon.ico'
      />
    </HeadData>
  )
}
