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
          <td>
            <Link href="/api/hello" >
            <Button variant="primary" size="lg">Sign In</Button>
            </Link>
          </td>
          <td>
            <Link href="/api/hello">
            <Button variant="dark" size="lg">Log In</Button>
            </Link>
          </td>
          {/* <div style={{paddingLeft:"25%",display:"block",paddingBottom:10}}>
            <div>

            </div>

          </div> */}
        </tr>
      </table>
    </div>
  )
}
