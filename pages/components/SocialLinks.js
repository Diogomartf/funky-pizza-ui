import Icon from "./Icon";

const SocialLinks = () => {
  return (
    <>
      <Icon link="https://discord.com/invite/fQfJheshq6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1838 15.9195L19.9988 5.30273C19.935 5.08872 19.8241 4.89171 19.6743 4.72616C19.5244 4.5606 19.3394 4.43071 19.1328 4.346L19.0824 4.36129L19.1339 4.3433C18.0885 3.91707 17.0042 3.59345 15.8962 3.37701C15.7996 3.3578 15.7002 3.35781 15.6036 3.37703C15.507 3.39626 15.4151 3.43432 15.3332 3.48905C15.2513 3.54378 15.181 3.6141 15.1263 3.696C15.0716 3.7779 15.0336 3.86977 15.0143 3.96638C14.9951 4.06298 14.9951 4.16242 15.0144 4.25902C15.0336 4.35562 15.0717 4.44749 15.1264 4.52938C15.1811 4.61127 15.2514 4.68158 15.3333 4.73629C15.4152 4.79101 15.5071 4.82905 15.6037 4.84826C16.0241 4.93185 16.4361 5.03021 16.8398 5.14334C16.9978 5.22139 17.1233 5.35277 17.1939 5.51429C17.2645 5.67581 17.2758 5.8571 17.2258 6.02615C17.1758 6.1952 17.0677 6.34115 16.9206 6.43824C16.7734 6.53534 16.5967 6.57733 16.4216 6.55682C13.5545 5.82025 10.5484 5.81433 7.67841 6.53961C7.50008 6.58345 7.31187 6.56031 7.14948 6.47457C6.98709 6.38883 6.86183 6.24646 6.79746 6.07447C6.7331 5.90248 6.73412 5.71285 6.80032 5.54156C6.86652 5.37028 6.9933 5.22925 7.1566 5.14526L7.15981 5.14636C7.56319 5.03338 7.97571 4.93488 8.39737 4.85087C8.59245 4.81205 8.76412 4.69734 8.87462 4.53197C8.98513 4.36659 9.02542 4.16409 8.98663 3.96901C8.94785 3.77393 8.83316 3.60224 8.6678 3.49171C8.50244 3.38118 8.29995 3.34086 8.10486 3.37962C6.99687 3.59608 5.91253 3.9197 4.86714 4.34591C4.66053 4.43063 4.4755 4.56053 4.32563 4.72608C4.17576 4.89163 4.06486 5.08864 4.00105 5.30264L0.816025 15.9195C0.733745 16.1973 0.733193 16.4929 0.814434 16.771C0.895676 17.0491 1.05527 17.2979 1.27415 17.4877C1.36365 17.5655 1.45538 17.6419 1.5484 17.7175C1.5506 17.7193 1.55247 17.7214 1.55467 17.7231C3.07628 18.9575 5.07062 19.9004 7.32204 20.45C7.51527 20.4972 7.71933 20.4657 7.88932 20.3624C8.05932 20.2591 8.18132 20.0926 8.2285 19.8993C8.27568 19.7061 8.24417 19.5021 8.14089 19.3321C8.03762 19.1621 7.87104 19.0401 7.67781 18.9929C6.66528 18.7495 5.68071 18.4018 4.73988 17.9554L4.74606 17.9559C4.61414 17.8363 4.52909 17.6736 4.50615 17.497C4.48321 17.3204 4.52387 17.1414 4.62085 16.9921C4.71783 16.8427 4.8648 16.7328 5.03546 16.6819C5.20611 16.631 5.3893 16.6425 5.55223 16.7144C7.33211 17.5072 9.56833 18 11.9999 18C14.4315 18 16.6693 17.5066 18.4492 16.7138C18.6121 16.6424 18.7952 16.6312 18.9656 16.6823C19.136 16.7334 19.2827 16.8435 19.3794 16.9928C19.4762 17.1421 19.5167 17.321 19.4936 17.4974C19.4706 17.6739 19.3856 17.8364 19.2538 17.9559L19.26 17.9554C18.3191 18.4018 17.3346 18.7495 16.322 18.9929C16.1288 19.0401 15.9622 19.1621 15.859 19.3321C15.7557 19.5021 15.7242 19.7061 15.7713 19.8993C15.8185 20.0926 15.9405 20.2592 16.1105 20.3624C16.2805 20.4657 16.4846 20.4972 16.6778 20.45C18.9292 19.9004 20.9236 18.9575 22.4452 17.7231C22.4475 17.7213 22.4494 17.7192 22.4516 17.7173H22.4517C22.5446 17.6417 22.6363 17.5653 22.7258 17.4876C22.9446 17.2978 23.1042 17.049 23.1854 16.7709C23.2666 16.4929 23.2661 16.1973 23.1838 15.9195ZM8.99992 14.625C8.77742 14.625 8.55991 14.559 8.37491 14.4354C8.1899 14.3118 8.04571 14.1361 7.96056 13.9305C7.87541 13.7249 7.85313 13.4987 7.89654 13.2805C7.93995 13.0623 8.04709 12.8618 8.20443 12.7045C8.36176 12.5472 8.56222 12.44 8.78045 12.3966C8.99868 12.3532 9.22488 12.3755 9.43044 12.4606C9.63601 12.5458 9.81171 12.69 9.93533 12.875C10.0589 13.06 10.1249 13.2775 10.1249 13.5C10.1249 13.7984 10.0064 14.0845 9.79542 14.2955C9.58444 14.5065 9.29829 14.625 8.99992 14.625ZM14.9999 14.625C14.7774 14.625 14.5599 14.559 14.3749 14.4354C14.1899 14.3118 14.0457 14.1361 13.9606 13.9305C13.8754 13.7249 13.8531 13.4987 13.8965 13.2805C13.9399 13.0623 14.0471 12.8618 14.2044 12.7045C14.3618 12.5472 14.5622 12.44 14.7804 12.3966C14.9987 12.3532 15.2249 12.3755 15.4304 12.4606C15.636 12.5458 15.8117 12.69 15.9353 12.875C16.0589 13.06 16.1249 13.2775 16.1249 13.5C16.1249 13.7984 16.0064 14.0845 15.7954 14.2955C15.5844 14.5065 15.2983 14.625 14.9999 14.625Z"
            fill="#D61818"
          />
        </svg>
      </Icon>
      <Icon link="https://t.me/funkypizza">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6794 2.97529C21.4727 2.79684 21.2212 2.67833 20.952 2.63259C20.6828 2.58686 20.4062 2.61564 20.1522 2.71583L2.84995 9.51316C2.54837 9.63164 2.29326 9.84459 2.1228 10.1201C1.95233 10.3957 1.87568 10.719 1.9043 11.0418C1.93293 11.3646 2.0653 11.6694 2.2816 11.9106C2.49791 12.1519 2.78651 12.3166 3.10424 12.3801L7.49914 13.2591V18.7485C7.49889 19.0453 7.58671 19.3355 7.75149 19.5823C7.91627 19.8292 8.15059 20.0216 8.42478 20.1351C8.69897 20.2487 9.0007 20.2784 9.29176 20.2203C9.58281 20.1623 9.8501 20.0192 10.0598 19.8092L12.492 17.377L16.1835 20.6256C16.4553 20.8669 16.806 21.0004 17.1694 21.0008C17.3275 21.0007 17.4845 20.9758 17.6348 20.927C17.8827 20.8484 18.1056 20.7062 18.2814 20.5145C18.4571 20.3228 18.5796 20.0883 18.6364 19.8345L22.1627 4.44709C22.2241 4.18101 22.2115 3.90321 22.1263 3.64377C22.0411 3.38433 21.8866 3.15316 21.6794 2.97529V2.97529ZM17.1743 19.4995L9.45008 12.702L20.573 4.66888L17.1743 19.4995Z"
            fill="#D61818"
          />
        </svg>
      </Icon>
      <Icon link="https://twitter.com/FunkyPizzaNFT">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.0305 7.28032L20.2027 10.1083C19.6381 16.6596 14.1131 21.75 7.50017 21.75C6.13851 21.75 5.01635 21.5341 4.16477 21.1083C3.47753 20.7647 3.196 20.3959 3.12615 20.291C3.06348 20.197 3.02286 20.0901 3.00731 19.9782C2.99177 19.8663 3.00171 19.7523 3.03639 19.6448C3.07107 19.5372 3.12959 19.4389 3.20759 19.3572C3.28558 19.2755 3.38104 19.2124 3.48682 19.1728C3.51094 19.1636 5.72258 18.3142 7.152 16.6969C6.2629 16.0638 5.48038 15.2931 4.83388 14.4137C3.54876 12.6696 2.18957 9.64074 3.01226 5.11583C3.03674 4.98117 3.09761 4.85578 3.18827 4.75323C3.27893 4.65069 3.39592 4.57491 3.52656 4.5341C3.65721 4.4933 3.79653 4.48902 3.92943 4.52173C4.06234 4.55444 4.18376 4.6229 4.28054 4.71968C4.31359 4.75264 7.43448 7.82946 11.2497 8.82331L11.2502 8.24964C11.2583 7.04883 11.7428 5.90036 12.5973 5.05666C13.4518 4.21297 14.6064 3.7431 15.8072 3.75033C16.5873 3.76113 17.3512 3.97408 18.0244 4.36838C18.6976 4.76268 19.257 5.32484 19.648 5.99996L22.5002 6.00001C22.6485 6.00001 22.7935 6.04399 22.9168 6.1264C23.0402 6.20881 23.1363 6.32594 23.1931 6.46298C23.2499 6.60002 23.2647 6.75082 23.2358 6.89631C23.2068 7.04179 23.1354 7.17543 23.0305 7.28032Z"
            fill="#D61818"
          />
        </svg>
      </Icon>
    </>
  );
};

export default SocialLinks;
