const MarqueeGroup = () => {
  return (
    <section>
      <div className="relative m-auto flex gap-28 overflow-hidden bg-default-100 py-4 dark:bg-default-50">
        <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28">
          <h2 className="text-4xl font-normal text-default-950">
            Retirement Planning
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Investment Management
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Tax Strategies
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Estate Planning
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Wealth Management
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
        >
          <h2 className="text-4xl font-normal text-default-950">
            Retirement Planning
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Investment Management
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Tax Strategies
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Estate Planning
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Wealth Management
          </h2>
        </div>
      </div>
    </section>
  )
}

export default MarqueeGroup
