import { Skeleton } from "@/components/ui/skeleton";


const ProposalCardSkeleton = () => {
   return (
     <div className=" rounded-xl p-6 shadow-sm border border-gray-200 bg-white">
       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
         {/* LEFT SECTION */}
         <div className="flex-1 min-w-0 space-y-4">
           {/* Title */}
           <Skeleton className="h-6 w-3/4 " />

           {/* Status row */}
           <div className="flex flex-wrap items-center gap-2">
             <Skeleton className="h-7 w-20 rounded-full" />
             <Skeleton className="h-4 w-10" />
             <Skeleton className="h-4 w-28" />
           </div>

           {/* Description */}
           <div className="space-y-2">
             <Skeleton className="h-4 w-full" />
             <Skeleton className="h-4 w-5/6" />
           </div>

           {/* Meta info */}
           <div className="flex flex-wrap items-center gap-4 pt-2">
             <div className="flex items-center space-x-2">
               <Skeleton className="h-4 w-4 rounded-full" />
               <Skeleton className="h-4 w-24" />
             </div>

             <div className="flex items-center space-x-2">
               <Skeleton className="h-4 w-4 rounded-full" />
               <Skeleton className="h-4 w-32" />
             </div>
           </div>
         </div>

         {/* RIGHT SECTION */}
         <div className="lg:min-w-[300px] space-y-4">
           {/* Votes header */}
           <div className="flex items-center justify-between">
             <Skeleton className="h-4 w-12" />
             <Skeleton className="h-4 w-20" />
           </div>

           {/* Progress bar */}
           <Skeleton className="h-2 w-full rounded-full" />

           {/* Vote counts */}
           <div className="flex items-center justify-between">
             <div className="flex items-center space-x-2">
               <Skeleton className="h-4 w-4 rounded-full" />
               <Skeleton className="h-4 w-20" />
             </div>

             <div className="flex items-center space-x-2">
               <Skeleton className="h-4 w-4 rounded-full" />
               <Skeleton className="h-4 w-24" />
             </div>
           </div>

           {/* Buttons */}
           <div className="flex gap-2 pt-1">
             <Skeleton className="h-10 flex-1 rounded-lg" />
             <Skeleton className="h-10 flex-1 rounded-lg" />
           </div>
         </div>
       </div>
     </div>
   );
}

export default ProposalCardSkeleton
