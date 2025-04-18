import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Check } from 'lucide-react'

interface SuccessModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    handleClaimFunding: () => void
  }
  

const ProposalsuccessModal = ({open,onOpenChange,handleClaimFunding}:SuccessModalProps) => {
  return (
    <div>
        <Dialog  open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gray-800 text-white border-none max-w-md">
          <div className="flex flex-col items-center text-center p-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="relative bg-teal-500 rounded-full p-6">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Congratulations, your proposal got approved.</h2>

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
            <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black" onClick={handleClaimFunding}>
              Claim funding
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProposalsuccessModal