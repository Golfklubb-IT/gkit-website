import { useState } from 'react'
import '../styles/ArrayEditor.css'

interface ArrayItem {
  [key: string]: any
}

interface ArrayEditorProps {
  value: ArrayItem[]
  onChange: (value: ArrayItem[]) => void
  fieldName: string
}

export default function ArrayEditor({ value, onChange, fieldName }: ArrayEditorProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const items = Array.isArray(value) ? value : []

  const handleAddItem = () => {
    const newItem: ArrayItem = {}
    
    // Guess structure from existing items
    if (items.length > 0) {
      const firstItem = items[0]
      for (const key of Object.keys(firstItem)) {
        newItem[key] = ''
      }
    } else {
      // Default structure for common fields
      if (fieldName === 'features') {
        newItem.title = ''
        newItem.description = ''
        newItem.icon = ''
      }
    }
    
    onChange([...items, newItem])
    setExpandedIndex(items.length)
  }

  const handleRemoveItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index))
    if (expandedIndex === index) {
      setExpandedIndex(null)
    }
  }

  const handleUpdateField = (itemIndex: number, fieldKey: string, fieldValue: any) => {
    const newItems = [...items]
    newItems[itemIndex] = {
      ...newItems[itemIndex],
      [fieldKey]: fieldValue
    }
    onChange(newItems)
  }

  const handleMoveUp = (index: number) => {
    if (index === 0) return
    const newItems = [...items]
    ;[newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]]
    onChange(newItems)
    setExpandedIndex(index - 1)
  }

  const handleMoveDown = (index: number) => {
    if (index === items.length - 1) return
    const newItems = [...items]
    ;[newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]
    onChange(newItems)
    setExpandedIndex(index + 1)
  }

  if (!Array.isArray(value)) {
    return <div className="admin-array-error">Invalid array data</div>
  }

  return (
    <div className="admin-array-editor">
      <div className="admin-array-header">
        <h4>{fieldName} ({items.length} items)</h4>
        <button
          type="button"
          onClick={handleAddItem}
          className="admin-array-add-btn"
        >
          + Add Item
        </button>
      </div>

      <div className="admin-array-list">
        {items.length === 0 ? (
          <p className="admin-array-empty">No items yet. Click "Add Item" to create one.</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className={`admin-array-item ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div
                className="admin-array-item-header"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <span className="admin-array-item-number">#{index + 1}</span>
                <span className="admin-array-item-preview">
                  {item.title || item.name || item.description?.substring(0, 50) || 'Item'}
                </span>
                <span className="admin-array-item-arrow">
                  {expandedIndex === index ? '▼' : '▶'}
                </span>
              </div>

              {expandedIndex === index && (
                <div className="admin-array-item-content">
                  {Object.keys(item).map(fieldKey => {
                    const fieldValue = item[fieldKey]
                    const fieldType = typeof fieldValue

                    return (
                      <div key={fieldKey} className="admin-array-field">
                        <label>{fieldKey}</label>
                        {fieldType === 'string' && fieldValue.length > 50 ? (
                          <textarea
                            value={fieldValue}
                            onChange={e =>
                              handleUpdateField(index, fieldKey, e.target.value)
                            }
                            rows={3}
                            className="admin-array-input admin-array-textarea"
                          />
                        ) : fieldType === 'string' ? (
                          <input
                            type="text"
                            value={fieldValue}
                            onChange={e =>
                              handleUpdateField(index, fieldKey, e.target.value)
                            }
                            className="admin-array-input"
                          />
                        ) : fieldType === 'number' ? (
                          <input
                            type="number"
                            value={fieldValue}
                            onChange={e =>
                              handleUpdateField(index, fieldKey, Number(e.target.value))
                            }
                            className="admin-array-input"
                          />
                        ) : fieldType === 'boolean' ? (
                          <input
                            type="checkbox"
                            checked={fieldValue}
                            onChange={e =>
                              handleUpdateField(index, fieldKey, e.target.checked)
                            }
                            className="admin-array-checkbox"
                          />
                        ) : (
                          <input
                            type="text"
                            value={String(fieldValue)}
                            onChange={e =>
                              handleUpdateField(index, fieldKey, e.target.value)
                            }
                            className="admin-array-input"
                          />
                        )}
                      </div>
                    )
                  })}

                  <div className="admin-array-item-actions">
                    <button
                      type="button"
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                      className="admin-array-btn admin-array-btn-up"
                      title="Move up"
                    >
                      ⬆️ Up
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveDown(index)}
                      disabled={index === items.length - 1}
                      className="admin-array-btn admin-array-btn-down"
                      title="Move down"
                    >
                      ⬇️ Down
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(index)}
                      className="admin-array-btn admin-array-btn-delete"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
