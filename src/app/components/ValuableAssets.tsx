import { valuableAssets } from '../data'
import AssetCard from './AssetCard'

const ValuableAssets = () => {
  return (
    <section id="assets" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-center">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Resources & Tools
            </span>
            <h2 className="mt-4 text-4xl font-medium text-default-950">
              Financial Education & Planning Resources
            </h2>
            <p className="mt-4 text-base text-default-700">
              Access our comprehensive library of financial planning guides, investment insights, and tools to help you make informed decisions about your financial future.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {valuableAssets.map((asset, idx) => (
            <AssetCard asset={asset} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuableAssets
