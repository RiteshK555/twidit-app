import Button from 'react-bootstrap/Button';
import Link from 'next/link';
export default function Home() {
  return (
    <div style={{paddingLeft:"35%",paddingTop:"10%"}}>
      <table>
        <tr>
      <h1>
        Welcome to twidit!
      </h1>
        </tr>
        <tr>
          <div style={{paddingLeft:"35%",display:"block"}}>
            <Link href="/api/hello">
            <Button variant="primary">Sign In</Button>
            </Link>

          </div>
        </tr>
      </table>
    </div>
  )
}
