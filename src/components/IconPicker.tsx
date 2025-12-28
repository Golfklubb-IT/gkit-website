import '../styles/IconPicker.css'

interface IconPickerProps {
  value: string
  onChange: (value: string) => void
}

const AVAILABLE_ICONS = [
  'calendar',
  'calendar-check',
  'form',
  'trophy',
  'brain',
  'car',
  'briefcase',
  'settings',
  'users',
  'mail',
  'phone',
  'map',
  'star',
  'heart',
  'thumbs-up',
  'check',
  'x',
  'info',
  'alert',
  'gear'
]

export default function IconPicker({ value, onChange }: IconPickerProps) {
  return (
    <div className="admin-icon-picker">
      <div className="admin-icon-preview">
        <span className="admin-icon-label">Selected:</span>
        <span className="admin-icon-display">{value || '(none)'}</span>
      </div>

      <div className="admin-icon-grid">
        <button
          type="button"
          onClick={() => onChange('')}
          className={`admin-icon-option ${value === '' ? 'active' : ''}`}
          title="None"
        >
          <span className="admin-icon-option-name">None</span>
        </button>

        {AVAILABLE_ICONS.map(icon => (
          <button
            key={icon}
            type="button"
            onClick={() => onChange(icon)}
            className={`admin-icon-option ${value === icon ? 'active' : ''}`}
            title={icon}
          >
            <span className="admin-icon-option-emoji">
              {getIconEmoji(icon)}
            </span>
            <span className="admin-icon-option-name">{icon}</span>
          </button>
        ))}
      </div>

      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Or type custom icon name..."
        className="admin-icon-input"
      />
    </div>
  )
}

function getIconEmoji(icon: string): string {
  const emojiMap: { [key: string]: string } = {
    calendar: '📅',
    'calendar-check': '✅',
    form: '📝',
    trophy: '🏆',
    brain: '🧠',
    car: '🚗',
    briefcase: '💼',
    settings: '⚙️',
    users: '👥',
    mail: '📧',
    phone: '📞',
    map: '🗺️',
    star: '⭐',
    heart: '❤️',
    'thumbs-up': '👍',
    check: '✔️',
    x: '❌',
    info: 'ℹ️',
    alert: '⚠️',
    gear: '🔧'
  }
  return emojiMap[icon] || '◯'
}
