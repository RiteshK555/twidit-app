import Button from 'react-bootstrap/Button';
import Link from 'next/link';
export default function Home() {
  return (
    <div style={{paddingLeft:"35%",paddingTop:"10%"}}>
      <h1>
        Welcome to twidit!
      </h1>
        <div style={{paddingLeft:62}}>
            <Link href="/signin" >
            <Button style={{margin:12}} variant="primary" size="lg">Sign In</Button>
            </Link>
        </div>
    </div>
  )
}
