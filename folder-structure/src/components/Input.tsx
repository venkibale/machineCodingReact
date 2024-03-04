import { ChangeEvent, useState } from "react";
import { NodeIntf, NodeOrNull } from "../utils/node.interface";

interface Props {
    defaultValue?: string;
    onComplete: (value: string) => void;
}
const Input = ({ onComplete, defaultValue=""}: Props) => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState<string | null>(null)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newVal = (e.target as HTMLInputElement).value;
        setValue(newVal);

        if (newVal !== '') setError('File or Folder name cannot be empty');
        // else if()
        else setError(null)
        
    }

    const onEntry = () =>{
        onComplete(value)
    };

    const onKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            onEntry();
        }
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    autoFocus={true}
                    onBlur={onEntry}
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                    value={value}
                />
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;