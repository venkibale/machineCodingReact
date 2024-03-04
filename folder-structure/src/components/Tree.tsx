import { useState, useRef } from "react";
import { NodeIntf, NodeOrNull } from "../utils/node.interface";
import Folder from "./Folder";
import File from "./File";
import Input from "./Input";
interface Props     {
    node: NodeIntf;
    parent: NodeOrNull,
    onNodeAddition:(a: NodeIntf, b:NodeIntf) =>void,
    validateNode: (a: NodeIntf, b:NodeIntf | null, c: string) => boolean
}
const Tree = ({node, parent, onNodeAddition, validateNode}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const [isNew, setIsNew] = useState(false);

    const isFolderRef = useRef(false);

    const toggleExpand = (e: MouseEvent) => {
        e.stopPropagation();
        setExpanded(!expanded);
    }

    const onNew = (isFolder: boolean) => {
        isFolderRef.current = isFolder;
        setIsNew(!isNew);
        setExpanded(true);
    };

    const validateNodeOnNew = (name: string) => validateNode(node, null, name);
    

    const onComplete = (name: string) => {
        if(name && validateNodeOnNew(name)) {
            onNodeAddition(node, {
                name,
                id: new Date().getTime().toString(),
                isFolder: isFolderRef.current
            })
        }
        setIsNew(false);
    }

    return (
        <>
            <Folder
                node={node}
                parent={parent}
                expanded={expanded}
                toggleExpand={toggleExpand}
            >
            </Folder>

            {expanded && (
                <div>
                    {node.nodes?.map((childNode)=>
                        childNode.isFolder ? (
                            <Tree
                                key={childNode.id}
                                node={childNode}
                                parent={node}
                            >
                            </Tree>
                        ) : 
                        (
                            <File
                                key={childNode.id}
                                node={childNode}
                                parent={node}
                            >

                            </File>
                        )
                    )}
                    {isNew && (
                        <li>
                               {isFolderRef.current ? "📁" : "📄"}&nbsp;
                               <Input
                                    onComplete={onComplete}
                               ></Input> 
                        </li>
                    )}
                </div>
            )}
        </>
    );
}

export default Tree;