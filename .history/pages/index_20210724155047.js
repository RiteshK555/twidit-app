import Button from 'react-bootstrap/Button';
import Link from 'next/link';
export default function Home() {
  return (
    <div style={{alignItems: 'center'}}>
      <table>
        <tr>
      <h1>
        Welcome to twidit!
      </h1>
        </tr>
      </table>
        <div>
            <Link href="/api/hello" >
            <Button variant="primary" size="lg">Sign In</Button>
            </Link>
        </div>
        <div>
             <Link href="/api/hello">
            <Button variant="dark" size="lg">Log In</Button>
            </Link>
        </div>
    </div>
  )
}
