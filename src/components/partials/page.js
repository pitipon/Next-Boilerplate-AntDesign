import Link from 'next/link'
import { connect } from 'react-redux'

// Components
import Counter from './counter'
import Clock from './clock'
import { Button } from 'antd'

// styles
import "../../styles/styles.less"

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div>
      <div className="example">{title}</div>
      <div>
        <Button type="primary" icon="download" size="large">Download</Button>
      </div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default connect(state => state)(Page)
