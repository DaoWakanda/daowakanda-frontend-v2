import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React from 'react'


interface FailureModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
  }

const FailureProposalModal = ({open,onOpenChange}:FailureModalProps) => {
  return (
    <div>
          <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gray-800 text-white border-none max-w-md">
          <div className="flex flex-col items-center text-center p-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-orange-500 rounded-full p-6">
                <X className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Unfortunately, your proposal was declined</h2>

            <div className="w-full space-y-1 mb-6">
              <div className="flex justify-between">
                <span>Total votes:</span>
                <span>78</span>
              </div>
              <div className="flex justify-between">
                <span>Yes:</span>
                <span>83%</span>
              </div>
              <div className="flex justify-between">
                <span>No:</span>
                <span>17%</span>
              </div>
            </div>

            <Button className="w-full bg-white hover:bg-gray-200 text-black" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}

export default FailureProposalModal