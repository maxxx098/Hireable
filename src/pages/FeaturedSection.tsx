import FeatureCard from '@/components/FeatureCard'
import ProfileHoverAnimation from '@/components/ProfileHoverAnimation'
import TrialProgressCard from '@/components/TrialProgress'
import Page from '@/components/page'

const FeaturedSection = () => {
  return (
    <section className="flex not-first:min-h-screen items-center justify-center px-4">
      <main className="grid items-center justify-center gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-[450px] ">
          <Page/>
        </div>
        <div className="w-[450px]">
          <ProfileHoverAnimation />
        </div>
        <div className="w-[450px]">
          <TrialProgressCard />
        </div>
      </main>
    </section>
  )
}

export default FeaturedSection
