import { NodeIntf, NodeOrNull } from "../utils/node.interface";

interface Props {
    node: NodeIntf;
    parent: NodeOrNull;
}
const File = ({node, parent}: Props) => {
    return (
        <>
            <li>
                <button>📄 {node.name}</button>
            </li>
        </>
    );
};

export default File;