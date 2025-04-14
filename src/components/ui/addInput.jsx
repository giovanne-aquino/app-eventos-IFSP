import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

function AddInput({ id, label, placeholder, label2, value = [], onChange }) {
  const [input, setInput] = useState("")

  const handleAdd = () => {
    const tag = input.trim()
    if (tag && !value.includes(tag)) {
      onChange([...value, tag])
      setInput("")
    }
  }

  const handleRemove = () => {
    const tag = input.trim()
    if (tag && value.includes(tag)) {
      onChange(value.filter((t) => t !== tag))
      setInput("")
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <div className="flex flex-col items-end gap-2 sm:flex-row">
          <Input
            id={id}
            label={label}
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            className="bg-FI_neutral_0 border-FI_input_stroke"
            width="w-full"
          />
          <Button type="button" onClick={handleRemove} variant="outline" className="w-full bg-white border-FI_input_stroke hover:bg-red-300 sm:w-auto">
            <Minus size={16} />
          </Button>
          <Button type="button" onClick={handleAdd} variant="outline" className="w-full bg-white border-FI_input_stroke hover:bg-green-300 sm:w-auto">
            <Plus size={16} />
          </Button>
        </div>      
      </div>
      <div className="w-full flex flex-col">
        <Select>
          <SelectTrigger
            id={label2}
            label={label2}
            className="bg-FI_neutral_0 border-FI_input_stroke"
            width="w-full"
          >
            <SelectValue placeholder={`Total de ${label2} ${value.length}`} />
          </SelectTrigger>
          <SelectContent>
            {value.length === 0 ? (
                <></>
              ) : (
              <>        
                {value.map((tag, index) => (
                  <SelectItem value={tag} key={index} disabled>{tag}</SelectItem>
                ))}
              </>
            )}
          </SelectContent>
        </Select>      
      </div>
    </div>
  )
}

AddInput.displayName = "AddInput";

export { AddInput };