import { calculate } from "./logic";

export default function Phototherapy() {
    return (
        <>
            <div>Phototherapy</div>
            <div>3 + 4 = {calculate(3, 4)}</div>
        </>
    )
  }