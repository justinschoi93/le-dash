return  (
    <Draggable
    key={widgetName}
    axis="both" // Allow both horizontal and vertical dragging
    handle=".handle"
    defaultPosition={{ x: 0, y: 0 }}
    position={null}
    grid={[25, 25]}
    scale={1}
    // onStart={eventLogger}
    // onDrag={eventLogger}
    // onStop={eventLogger}
    bounds="#root" // restrict every draggable div to the root of the page
  >
  <div className="widget">
    <div className="widget-handle">Drag from here</div>
      <div className="widget-content">
        <button className="widget-delete-btn" onClick={() => deleteWidgetHandler(widgetName)}>Delete</button> 
        <Widget />
      </div>

</div>
</Draggable>
)