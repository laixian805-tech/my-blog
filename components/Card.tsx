import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="max-w-[544px] p-4 md:w-1/2">
    {href ? (
      <Link
        href={href}
        aria-label={`Link to ${title}`}
        className={`${imgSrc ? 'h-full' : ''} card-shell card-shell-interactive group block overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
      >
        {imgSrc && (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="card-shell-title mb-3 text-2xl leading-8 font-bold tracking-tight">
            {title}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <span className="card-shell-cta text-primary-500 text-base leading-6 font-medium">
            查看详情 &rarr;
          </span>
        </div>
      </Link>
    ) : (
      <div
        className={`${imgSrc ? 'h-full' : ''} card-shell card-shell-static overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
      >
        {imgSrc && (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{title}</h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    )}
  </div>
)

export default Card
