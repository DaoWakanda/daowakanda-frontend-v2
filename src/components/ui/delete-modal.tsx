"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onDelete: () => void
}

export function DeleteModal({ open, onOpenChange, onDelete }: DeleteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!bg-[#38393C] text-white border-none w-[80%] md:w-[780px]  md:h-[300px] font-spaceGrotesk rounded-[32px]">
        <div className="flex flex-col items-center text-center p-6 justify-center">
          <h2 className="text-[22px] md:text-[32px] font-bold mb-6">Are you sure you want to delete this proposal</h2>

          <div className="flex gap-4 w-full flex-col md:flex-row">
            <Button
              variant="outline"
              className="flex-1  text-black rounded-[50px]"
              onClick={() => onOpenChange(false)}
            >
              No, Cancel
            </Button>

            <Button className="flex-1 bg-[#A11414] hover:bg-red-700 rounded-[50px]" onClick={onDelete}>
              Yes, Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
