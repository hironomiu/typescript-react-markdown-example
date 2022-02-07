import { FC, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Home: FC = () => {
  const [markdown, setMarkdown] = useState('')

  return (
    <>
      <div className="flex flex-row pt-10">
        <div className="mx-10 h-600 w-600">
          <textarea
            className="border caret-red-500  pl-2 pt-2"
            name=""
            id=""
            rows={25}
            cols={59}
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
            // style={{ caretColor: 'red' }}
          />
        </div>
        <div className="markdown leading-none tracking-normal whitespace-pre-wrap overflow-scroll break-words h-600 w-600 text-start border rounded">
          <ReactMarkdown className="pl-2" plugins={[gfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default Home
