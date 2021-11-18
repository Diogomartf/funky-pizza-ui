import Icon from "./Icon";

const MenuIcon = ({ open }) => {
  return open ? (
    <Icon>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4146 16L25.7075 7.70712C25.8949 7.51954 26 7.26526 26 7.00015C25.9999 6.73505 25.8945 6.48083 25.7071 6.29338C25.5196 6.10592 25.2654 6.00057 25.0003 6.00049C24.7352 6.00041 24.4809 6.10559 24.2933 6.29293L16.0004 14.5858L7.70752 6.29293C7.51994 6.10559 7.26566 6.00041 7.00055 6.00049C6.73545 6.00057 6.48123 6.10592 6.29377 6.29338C6.10632 6.48083 6.00097 6.73505 6.00089 7.00015C6.0008 7.26526 6.10599 7.51954 6.29333 7.70712L14.5862 16L6.29333 24.2929C6.20038 24.3858 6.12663 24.496 6.0763 24.6174C6.02597 24.7387 6.00004 24.8688 6 25.0002C5.99996 25.1315 6.0258 25.2616 6.07606 25.383C6.12631 25.5044 6.19999 25.6147 6.29289 25.7076C6.38578 25.8005 6.49607 25.8741 6.61745 25.9244C6.73883 25.9746 6.86892 26.0005 7.00029 26.0004C7.13167 26.0004 7.26174 25.9745 7.38309 25.9241C7.50444 25.8738 7.61468 25.8001 7.70752 25.7071L16.0004 17.4142L24.2933 25.7071C24.4809 25.8945 24.7352 25.9996 25.0003 25.9996C25.2654 25.9995 25.5196 25.8941 25.7071 25.7067C25.8945 25.5192 25.9999 25.265 26 24.9999C26 24.7348 25.8949 24.4805 25.7075 24.2929L17.4146 16Z"
          fill="#D61818"
        />
      </svg>
    </Icon>
  ) : (
    <Icon>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H27C27.2652 17 27.5196 16.8946 27.7071 16.7071C27.8946 16.5196 28 16.2652 28 16C28 15.7348 27.8946 15.4804 27.7071 15.2929C27.5196 15.1054 27.2652 15 27 15Z"
          fill="#D61818"
        />
        <path
          d="M5 9H27C27.2652 9 27.5196 8.89464 27.7071 8.70711C27.8946 8.51957 28 8.26522 28 8C28 7.73478 27.8946 7.48043 27.7071 7.29289C27.5196 7.10536 27.2652 7 27 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9Z"
          fill="#D61818"
        />
        <path
          d="M27 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H27C27.2652 25 27.5196 24.8946 27.7071 24.7071C27.8946 24.5196 28 24.2652 28 24C28 23.7348 27.8946 23.4804 27.7071 23.2929C27.5196 23.1054 27.2652 23 27 23Z"
          fill="#D61818"
        />
      </svg>
    </Icon>
  );
};

export default MenuIcon;