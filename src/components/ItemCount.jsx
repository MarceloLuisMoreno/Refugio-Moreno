import { useState } from "react";
import { Table, Button } from "react-bootstrap";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const masClick = () => {
        if (count < stock) {
            setCount(count + 1);
            onAdd = count;
        }
    };
    const menosClick = () => {
        if (count > 1) {
            setCount(count - 1);
            onAdd = count;
        }
    };

    return (
        <div>
            <Table className="fs-5">
                <td>
                    <Button
                        onClick={menosClick}
                        variant="light"
                        size="sm"
                        className="bi bi-dash-circle-fill"
                    ></Button>
                </td>
                <td>{count}</td>
                <td>
                    <Button
                        onClick={masClick}
                        variant="light"
                        size="sm"
                        className="bi bi-plus-circle-fill"
                    ></Button>
                </td>
            </Table>
            <div className="card-footer text-center">
                <Button>Agregar al Carrito</Button>
            </div>
        </div>
    );
}

export default ItemCount;
