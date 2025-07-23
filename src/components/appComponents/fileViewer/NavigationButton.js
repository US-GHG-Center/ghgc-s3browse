import React, { useEffect } from "react";

const NavigationButton = ({ onClick, title, direction, isExist }) => {
  // Load USWDS sprite on mount
  useEffect(() => {
    const loadUSWDSSprite = async () => {
      if (document.getElementById('uswds-sprite')) return;
      
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@uswds/uswds@3.8.1/dist/img/sprite.svg');
        const svgData = await response.text();
        
        const spriteContainer = document.createElement('div');
        spriteContainer.id = 'uswds-sprite';
        spriteContainer.style.display = 'none';
        spriteContainer.innerHTML = svgData;
        
        document.body.appendChild(spriteContainer);
      } catch (error) {
        console.warn('Failed to load USWDS sprite:', error);
      }
    };

    loadUSWDSSprite();
  }, []);

  const USWDSIcon = ({ iconName, className, size, title, onClick }) => (
    <svg 
      className={className}
      title={title}
      onClick={onClick}
      style={{ 
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'pointer'
      }}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <use href={`#${iconName}`}></use>
    </svg>
  );

  return (
    <span>
      {direction === 'prev' && <USWDSIcon
        iconName="navigate_before"
        className="printIcon cursorPtr leftRightArrow"
        title={title}
        size={32}
        onClick={onClick}
      />}
      {direction === 'next' && <USWDSIcon
        iconName="navigate_next"
        className="printIcon cursorPtr leftRightArrow"
        title={title}
        size={32}
        onClick={onClick}
      />}
      {direction === 'Close' && <USWDSIcon
        iconName="close"
        onClick={onClick}
        title={title}
        className={"printIcon downPrint"}
        size={36}
      />}
      {direction === 'Download as zip' && <USWDSIcon
        iconName="file_download"
        className="fa-download-print"
        size={32}
        title="Download as zip"
      />}
      {direction === 'download' && <USWDSIcon
        iconName="file_download"
        className="fa-download-print"
        size={36}
        id="single-file-download"
        title="Download file"
      />}
      {direction === 'check' && <USWDSIcon
        iconName={isExist ? "check_circle" : "check_circle_outline"}
        className={`fa-download-print ${isExist ? "checked" : "unchecked"}`}
        size={32}
        title="Select"
      />}
    </span>
  );
};

export default NavigationButton;






// const NavigationButton = ({ onClick, title, direction, isExist }) => {
//   // USWDS icon mapping
//   const getUSWDSIcon = (direction) => {
//     const iconMap = {
//       'prev': 'navigate_before',
//       'next': 'navigate_next', 
//       'Close': 'close',
//       'Download as zip': 'file_download',
//       'print': 'print',
//       'download': 'download',
//       'check': isExist ? 'check_circle' : 'radio_button_unchecked'
//     };
//     return iconMap[direction] || 'help';
//   };

//   const iconName = getUSWDSIcon(direction);
  
//   return (
//     <span>
//       <svg 
//         className={`usa-icon printIcon cursorPtr ${
//           direction === 'prev' || direction === 'next' ? 'leftRightArrow' : 
//           direction === 'Close' ? 'downPrint' : 
//           direction === 'check' ? `fa-download-print ${isExist ? "checked" : "unchecked"}` :
//           'fa-download-print'
//         }`}
//         title={title || direction}
//         onClick={onClick}
//         style={{ 
//           width: direction === 'Close' || direction === 'download' ? '36px' : '32px',
//           height: direction === 'Close' || direction === 'download' ? '36px' : '32px',
//           cursor: 'pointer',
//           color:'red',
//           backgroundColor: 'blue'
//         }}
//         aria-hidden="true"
//         focusable="false"
//         role="img"
//       >
//         <use xlinkHref={`https://cdn.jsdelivr.net/npm/@uswds/uswds@3.0.0/dist/img/sprite.svg#${iconName}`}></use>
//       </svg>
//     </span>
//   );
// };

// export default NavigationButton;
//-----------------------------------------------------------

// import React, { useEffect, useState } from "react";

// const NavigationButton = ({ onClick, title, direction, isExist }) => {
//   const [spriteLoaded, setSpriteLoaded] = useState(false);

//   // Load USWDS sprite
//   useEffect(() => {
//     const loadSprite = async () => {
//       if (document.getElementById('uswds-sprite-container')) {
//         setSpriteLoaded(true);
//         return;
//       }

//       try {
//         const response = await fetch('https://cdn.jsdelivr.net/npm/@uswds/uswds@3.8.1/dist/img/sprite.svg');
//         const svgText = await response.text();
        
//         const container = document.createElement('div');
//         container.id = 'uswds-sprite-container';
//         container.style.cssText = 'position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;';
//         container.innerHTML = svgText;
        
//         document.body.appendChild(container);
//         setSpriteLoaded(true);
//       } catch (error) {
//         console.error('Failed to load USWDS sprite:', error);
//         setSpriteLoaded(false);
//       }
//     };

//     loadSprite();
//   }, []);

//   // USWDS icon mapping
//   const getUSWDSIcon = (direction) => {
//     const iconMap = {
//       'prev': 'arrow_back',
//       'next': 'arrow_forward', 
//       'Close': 'close',
//       'Download as zip': 'file_download',
//       'print': 'print',
//       'download': 'download',
//       'check': isExist ? 'check_circle' : 'check_circle_outline'
//     };
//     return iconMap[direction] || 'help_outline';
//   };

//   // Fallback SVG paths if sprite doesn't load
//   const getFallbackIcon = (direction) => {
//     const fallbackPaths = {
//       'prev': "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
//       'next': "M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z",
//       'Close': "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
//       'Download as zip': "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z",
//       'print': "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z",
//       'download': "M5,20H19V18H5M19,9H15L13.5,7.5C13.1,7.1 12.6,6.9 12.1,6.9H7V9H9.5L11,10.5L4,10.5V12.5H11L13.5,15H19A2,2 0 0,0 21,13V11A2,2 0 0,0 19,9Z",
//       'check': isExist 
//         ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
//         : "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
//     };
//     return fallbackPaths[direction] || "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
//   };

//   const iconName = getUSWDSIcon(direction);
//   const size = direction === 'Close' || direction === 'download' ? 36 : 32;
  
//   return (
//     <span>
//       <svg 
//         className={`usa-icon printIcon cursorPtr ${
//           direction === 'prev' || direction === 'next' ? 'leftRightArrow' : 
//           direction === 'Close' ? 'downPrint' : 
//           direction === 'check' ? `fa-download-print ${isExist ? "checked" : "unchecked"}` :
//           'fa-download-print'
//         }`}
//         title={title || direction}
//         onClick={onClick}
//         style={{ 
//           width: `${size}px`,
//           height: `${size}px`,
//           padding: '5px',
//           cursor: 'pointer',
//           fill: 'white',
//           backgroundcolor: '#222fbf',
//           borderRadius: '4px',
//           display: 'inline-block',
//           boxSizing: 'content-box',
//           zIndex: 10,
//           position: 'relative'
//         }}
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         focusable="false"
//         role="img"
//       >
//         {spriteLoaded ? (
//           <use href={`#${iconName}`}></use>
//         ) : (
//           <path d={getFallbackIcon(direction)} />
//         )}
//       </svg>
//     </span>
//   );
// };

// export default NavigationButton;
