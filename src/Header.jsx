function Header({ notifications, onMarkAllAsRead }) {
  return (
    <header className="flex justify-between pb-8">
      <div className="flex items-center gap-2 font-extrabold">
        <h1 className="text-xl leading-none text-black">Notifications</h1>
        <span className="rounded-md bg-primaryBlue px-[.7rem] py-[.2rem] text-xl leading-none text-secondary100">
          {notifications.filter((n) => !n.hasBeenRead).length}
        </span>
      </div>
      <button className="" onClick={onMarkAllAsRead}>
        Mark all as read
      </button>
    </header>
  );
}

export default Header;
