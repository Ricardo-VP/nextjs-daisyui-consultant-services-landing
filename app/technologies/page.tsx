import Image from 'next/image'

import { Technologies } from '@/components/Home/Technologies'
import techonologiesImg from '../../public/technologies.jpeg'

export default function TechnologiesPage() {
  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <Technologies />
    </div>
  )
}
