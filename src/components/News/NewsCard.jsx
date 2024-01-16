const NewsCard = ({news}) => {
  return (
    <div
                key={news.article_id}
                className="flex w-full items-center justify-between gap-4 border-b pb-4"
              >
                {/* FIXED IMAGE H AND W */}

                <div className="h-[100px] md:h-[150px]">
                  <img
                    src={
                      news.image_url
                        ? news.image_url
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
                    }
                    alt="img"
                    className="h-full w-[120px] rounded-lg object-fill md:w-[200px]"
                  />
                </div>
                {/* NEWS INFO */}
                <div className="w-full flex-col justify-center gap-1">
                  <a href={news.link} target="_blank" rel="noreferrer">
                    <h1 className="text-xl font-semibold hover:text-blue-800">
                      {news.title}
                    </h1>
                  </a>
                  <p className="hidden text-justify md:flex">
                    {news.description
                      ? `${news.description.slice(0, 200)}...`
                      : ""}
                  </p>
                  <p className="text-end">
                    {news.creator ? `By: ${news.creator}` : ""}
                  </p>
                  <div className="mt-2 flex w-full items-center justify-between text-sm italic">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noreferrer"
                      className="textLink italic hover:text-blue-600"
                    >
                      Read more
                    </a>
                    <p className="text-end">{news.pubDate.split(" ")[0]}</p>
                  </div>
                </div>
              </div>
  )
}

export default NewsCard