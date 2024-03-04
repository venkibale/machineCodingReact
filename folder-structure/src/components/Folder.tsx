import { NodeIntf, NodeOrNull } from "../utils/node.interface";

interface Props {
    node: NodeIntf;
    parent: NodeOrNull;
    expanded: boolean;
    onNew: (a: boolean)=> void;
    toggleExpand: (e: MouseEvent) => void;
}
const Folder = ({node, parent, expanded, onNew, toggleExpand} : Props) => {
    return (
        <>
            <li data-root={parent === null}>
                <button onClick={toggleExpand}>
                    {expanded ? "📂" : "📁"} {node?.name}
                </button>

                <div>
                    {/* <button className="edit" onClick={() => setIsEditable(true)}>
                    ✏️
                    </button> */}
                    <button className="new-file" onClick={() => onNew(false)}>
                    📄
                    </button>
                    <button className="new-folder" onClick={() => onNew(true)}>
                    🗂
                    </button>
                    {/* <button
                    className="delete"
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onClick={() => onNodeDeletion(parent!, node)}
                    >
                    🗑️
                    </button> */}
      </div>
            </li>
        </>
    );
};

export default Folder;