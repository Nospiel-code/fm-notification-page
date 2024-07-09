function Notification({ notificationObj, onMarkNotificationAsRead }) {
  return (
    <div
      onClick={() => onMarkNotificationAsRead(notificationObj.id)}
      className={`flex items-start justify-between gap-2 rounded-xl p-4 ${
        !notificationObj.hasBeenRead ? "bg-secondary200" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <img
          className="aspect-square w-12"
          src={notificationObj.author.src}
          alt={notificationObj.author.name}
        />
        <div className="grid gap-2">
          <div>
            <div>
              <div className="flex flex-wrap items-center">
                <a
                  className="font-extrabold text-black"
                  href={notificationObj.author.href}
                >
                  {notificationObj.author.name}
                </a>
                <p>&nbsp;{notificationObj.action}</p>
                {notificationObj.link && (
                  <a href={notificationObj.link.href}>
                    &nbsp;{notificationObj.link.text}
                  </a>
                )}
                {!notificationObj.hasBeenRead && (
                  <span className="ml-2 inline-block h-3 w-3 justify-center rounded-full bg-primaryRed"></span>
                )}
              </div>
              <p className="text-secondary500">{notificationObj.time}</p>
            </div>
            {notificationObj.message && (
              <div className="mt-2 cursor-pointer rounded-md border-2 border-secondary300 p-3 hover:bg-slate-200">
                {notificationObj.message}
              </div>
            )}
          </div>
        </div>
      </div>
      {notificationObj.img && (
        <a href={notificationObj.href}>
          <img
            className="aspect-square w-12"
            src={notificationObj.img.src}
            alt={notificationObj.img.alt}
          />
        </a>
      )}
    </div>
  );
}

export default Notification;
