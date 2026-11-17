import { useSelector } from 'react-redux';

function NotificationToast() {
  const { message, visible } = useSelector((state) => state.ui);

  if (!visible) {
    return null;
  }

  return (
    <div className="notification-toast">
      <span>✓</span>
      <p>{message}</p>
    </div>
  );
}

export default NotificationToast;
