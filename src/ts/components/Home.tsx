import { FC, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Home: FC = () => {
  const [markdown, setMarkdown] = useState('')

  return (
    <>
      <div className="flex flex-row pt-10">
        <div className="mx-10 w-600">
          <textarea
            className="border cursor-w-resize text-black caret-pink-500 focus:caret-red-500"
            name=""
            id=""
            rows={20}
            cols={59}
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
          />
        </div>
        <div className="markdown whitespace-pre-wrap break-words w-600 text-start border rounded">
          <ReactMarkdown plugins={[gfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default Home
