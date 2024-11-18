import { useState } from "react";
import Cell from "./Cell";

var board = [];

function generate(width, height){
    let resp = [];
    const canvas = document.createElement("canvas");
    const img = document.getElementById("src_img");
    img.crossOrigin = "Anonymus";
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext?.("2d");
    if (context === null) {
        return;
    }
    context.drawImage(img, 0, 0, width, height);
    if(img.width){
        const imageData = context.getImageData(0, 0, width, height);
        let average = 0;
        let i = 0;
        let pixel;
        for(let y = 0; y < height; y++){
            resp[y] = [];
            for(let x = 0; x < width; x++){
                pixel = 0;
                for(let z = 0; z < 4; z++){
                    pixel += imageData.data[i]
                    i++
                }
                pixel /= 4;
                average += pixel;
                resp[y][x] = pixel;
            }
        }
        average /= width * height;

        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                resp[y][x] = resp[y][x] < average;
            }
        }
        return resp;
    }
    return resp;
}

function calculate_columns(){
    let resp = [];
    let i;
    let t;
    for(let x = 0; x < board[0].length; x++){
        resp[x] = [];
        i = 0;
        t = 0;
        for(let y = 0; y < board.length; y++){
            if(board[y][x]){
                t++;
            }
            else{
                if(t){
                    resp[x][i] = t;
                    i++;
                    t = 0;
                }
            }
        }
        if(t != 0 || i == 0){
            resp[x][i] = t;
        }
    }
    return resp;
}

function calculate_rows(){
    let resp = [];
    let i;
    let t;
    for(let y = 0; y < board.length; y++){
        resp[y] = [];
        i = 0;
        t = 0;
        for(let x = 0; x < board[y].length; x++){
            if(board[y][x]){
                t++;
            }
            else{
                if(t){
                    resp[y][i] = t;
                    i++;
                    t = 0;
                }
            }
        }
        if(t != 0 || i == 0){
            resp[y][i] = t;
        }
    }
    return resp;
}

function Picross (params) {
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const gen = () => {
        if(params.width > 0 && params.height > 0){
            board = [];
            board = generate(params.width, params.height)
            if(board.length){
                setColumns(calculate_columns());
                setRows(calculate_rows());
            }
        }
    }

    return(
        <>
        <button onClick={gen}>generate</button>
        <table className="picross_table"><tbody>
            <tr>
                <td></td>
                {columns.map((column) =>
                    <td>
                        <table><tbody>
                            {column.map((num) =>
                            <tr>
                                <td>{num}</td>
                            </tr>
                            )}
                        </tbody></table>
                    </td>    
                )}
            </tr>
            {board.map((row, j) =>
                <tr>
                    <td>
                        <table><tbody>
                        <tr>
                            {rows[j].map((num) =>
                            <td>{num}</td>
                            )}
                        </tr>
                        </tbody></table>
                    </td>
                    {row.map((cell) => 
                        <td>
                            <Cell set={cell}></Cell>
                        </td>
                    )}
                </tr>
            )}
        </tbody></table>
        </>
    )
}

export default Picross;