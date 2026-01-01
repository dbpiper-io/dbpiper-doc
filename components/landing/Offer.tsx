import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift } from "lucide-react"
import Link from 'next/link'

export const Offer = () => {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <Card className="relative overflow-hidden bg-linear-to-r from-blue-50 via-green-50 to-cyan-50 border-blue-200 shadow-lg">
        <div className="p-6 md:p-8 flex items-center gap-4 md:gap-6">
          <div className="shrink-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <Gift className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
              Sequin Customers: Free migration + 50% off for 3 months
            </h3>
          </div>
          <div className="shrink-0">
            <Button asChild size='lg'>
              <Link href='/waitlist'>
                Claim Sequin Discount
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>)
}
