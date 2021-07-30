import Button from 'react-bootstrap/Button';
export default function Home() {
  return (
    <div style={{paddingLeft:"40%",paddingTop:"10%"}}>
      <table>
        <tr>
      <h1>
        Welcome to twidit!
      </h1>
        </tr>
        <tr>
          <div style={{paddingLeft:"35%",display:"block"}}>
<Button >
  Sign In
</Button>
          </div>
        </tr>
      </table>
    </div>
  )
}
