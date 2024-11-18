import { useState } from "react";
import Src_Img from "./Src_Img";
import Picross from "./Picross";

function Home () {
    const [url, setUrl] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    return (
        <>
        <table className="input_table">
            <tr>
                <th>
                    url
                </th>
                <th>
                    width
                </th>
                <th>
                    height
                </th>
            </tr>
            <tr>
                <td>
                    <input id="input_url"
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    ></input>
                </td>
                <td>
                    <input id="input_width"
                        type="number"
                        onChange={(e) => setWidth(e.target.value)}
                        value={width}
                    ></input>
                </td>
                <td>
                    <input id="input_height"
                        type="number"
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                    ></input>
                </td>
            </tr>
        </table>
        <br></br>
        <Src_Img url={url}></Src_Img>
        <Picross width={width} height={height}></Picross>
        </>
    )
}

export default Home;