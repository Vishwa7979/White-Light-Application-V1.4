import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgEllipse772 from "figma:asset/c2f52328299e638167353eadb562cc321f30f0c8.png";
import { ChatThread } from '../utils/chatThreadsData';

// --- SVG Paths ---
const svgPaths = {
  p11ebb000: "M4.47256 18.3612H8.48913V12.7766C8.48913 12.5251 8.57362 12.3143 8.74261 12.1441C8.91087 11.9733 9.11939 11.8879 9.36816 11.8879H12.6319C12.8807 11.8879 13.0895 11.9733 13.2585 12.1441C13.4268 12.3143 13.5109 12.5251 13.5109 12.7766V18.3612H17.5275V8.80023C17.5275 8.6873 17.5032 8.58463 17.4546 8.49224C17.406 8.39984 17.3397 8.31917 17.2555 8.25024L11.3982 3.78655C11.2865 3.68829 11.1538 3.63916 11 3.63916C10.8463 3.63916 10.7139 3.68829 10.6029 3.78655L4.74453 8.25024C4.66113 8.32064 4.59476 8.40131 4.54545 8.49224C4.49613 8.58317 4.47183 8.68583 4.47256 8.80023V18.3612ZM3.38464 18.3612V8.80023C3.38464 8.51864 3.44702 8.25208 3.57176 8.00055C3.69651 7.74902 3.8684 7.54186 4.08743 7.37906L9.94584 2.89338C10.2526 2.65652 10.6029 2.53809 10.9968 2.53809C11.3906 2.53809 11.7431 2.65652 12.0542 2.89338L17.9126 7.37797C18.1324 7.54076 18.3043 7.74829 18.4283 8.00055C18.553 8.25208 18.6154 8.51864 18.6154 8.80023V18.3612C18.6154 18.656 18.507 18.913 18.2901 19.1323C18.0733 19.3515 17.8191 19.4612 17.5275 19.4612H13.3021C13.0526 19.4612 12.8437 19.3761 12.6754 19.206C12.5071 19.0351 12.423 18.8239 12.423 18.5724V12.9889H9.57704V18.5724C9.57704 18.8246 9.49291 19.0358 9.32464 19.206C9.15638 19.3761 8.94786 19.4612 8.69909 19.4612H4.47256C4.181 19.4612 3.92679 19.3515 3.70993 19.1323C3.49307 18.913 3.38464 18.656 3.38464 18.3612Z",
  p122aa200: "M3.314 4.90719C3.21925 4.99721 3.16602 5.1193 3.16602 5.2466C3.16602 5.37391 3.21925 5.496 3.314 5.58601C3.40876 5.67603 3.53727 5.7266 3.67128 5.7266H9.06075C9.19476 5.7266 9.32327 5.67603 9.41803 5.58601C9.51278 5.496 9.56602 5.37391 9.56602 5.2466C9.56602 5.1193 9.51278 4.99721 9.41803 4.90719C9.32327 4.81717 9.19476 4.7666 9.06075 4.7666H3.67128C3.53727 4.7666 3.40876 4.81717 3.314 4.90719Z",
  p1d98d580: "M9.59022 10.2969C8.69166 11.0148 7.5523 11.3615 6.40615 11.2656C5.25999 11.1697 4.19405 10.6386 3.42725 9.78137C2.66045 8.92412 2.251 7.8058 2.28299 6.65609C2.31498 5.50638 2.78599 4.41255 3.59927 3.59927C4.41255 2.78599 5.50638 2.31498 6.65609 2.28299C7.8058 2.251 8.92412 2.66045 9.78137 3.42725C10.6386 4.19405 11.1697 5.25999 11.2656 6.40615C11.3615 7.5523 11.0148 8.69166 10.2969 9.59022L13.7342 13.0269C13.7833 13.0727 13.8227 13.1279 13.8501 13.1892C13.8774 13.2505 13.8921 13.3167 13.8933 13.3839C13.8945 13.451 13.8821 13.5177 13.857 13.58C13.8318 13.6422 13.7944 13.6988 13.7469 13.7462C13.6994 13.7937 13.6429 13.8312 13.5806 13.8563C13.5184 13.8814 13.4517 13.8938 13.3845 13.8926C13.3174 13.8914 13.2512 13.8767 13.1899 13.8494C13.1285 13.8221 13.0733 13.7827 13.0276 13.7336L9.59022 10.2969ZM4.30622 9.25555C3.81692 8.7662 3.48366 8.14277 3.34856 7.46407C3.21347 6.78536 3.2826 6.08184 3.54723 5.44242C3.81185 4.803 4.26009 4.25637 4.8353 3.87162C5.4105 3.48687 6.08685 3.28128 6.77887 3.28081C7.47089 3.28034 8.14751 3.48503 8.72323 3.86901C9.29895 4.25298 9.74793 4.799 10.0134 5.43807C10.2789 6.07714 10.349 6.78056 10.2148 7.45945C10.0806 8.13833 9.7482 8.76221 9.25955 9.25222L9.25622 9.25555L9.25289 9.25822C8.59628 9.9133 7.70651 10.281 6.779 10.2805C5.8515 10.28 4.96212 9.91134 4.30622 9.25555Z",
  p24451380: "M13.8064 5.16667C13.8237 5.65067 13.833 5.98667 13.833 6.5C13.833 7.01333 13.8237 7.51533 13.8064 8C13.751 9.582 13.723 10.3733 13.0797 11.022C12.4364 11.67 11.6224 11.7047 9.99571 11.7747C9.50593 11.7956 9.00037 11.8111 8.47904 11.8213C7.98571 11.8307 7.73837 11.8347 7.52104 11.918C7.30371 12.0013 7.12104 12.1567 6.75571 12.47L5.30304 13.7167C5.23234 13.7772 5.14575 13.8163 5.05353 13.8291C4.96132 13.842 4.86735 13.8281 4.78278 13.7892C4.69822 13.7502 4.62659 13.6878 4.57642 13.6094C4.52625 13.5309 4.49962 13.4398 4.49971 13.3467V11.7813L4.33704 11.7747C2.71038 11.7047 1.89704 11.67 1.25304 11.0213C0.609709 10.3733 0.581709 9.582 0.526375 8C0.491208 7.00031 0.491208 5.99969 0.526375 5C0.581709 3.418 0.609709 2.62667 1.25304 1.978C1.89638 1.33 2.71038 1.29533 4.33704 1.22533C5.61273 1.17156 6.8897 1.15444 8.16638 1.174M13.833 2.5H9.83304M11.833 0.5V4.5",
  p26844d00: "M9.45913 9.45801L9.45313 9.46401",
  p3a0cf00: "M3.314 7.14719C3.21925 7.23721 3.16602 7.3593 3.16602 7.4866C3.16602 7.61391 3.21925 7.736 3.314 7.82601C3.40876 7.91603 3.53727 7.9666 3.67128 7.9666H7.37654C7.51055 7.9666 7.63906 7.91603 7.73382 7.82601C7.82857 7.736 7.88181 7.61391 7.88181 7.4866C7.88181 7.3593 7.82857 7.23721 7.73382 7.14719C7.63906 7.05717 7.51055 7.0066 7.37654 7.0066H3.67128C3.53727 7.0066 3.40876 7.05717 3.314 7.14719Z",
  p209b0e00: "M18.1137 5.39848L17.6609 4.61381C17.319 4.01981 17.1476 3.72281 16.8561 3.60456C16.5655 3.4854 16.2364 3.57981 15.5773 3.7659L14.459 4.08123C14.0382 4.1784 13.5973 4.1234 13.2142 3.9254L12.9052 3.74756C12.5761 3.53665 12.323 3.22607 12.1829 2.86115L11.8767 1.94631C11.6751 1.34131 11.5742 1.03881 11.335 0.86648C11.0957 0.692313 10.7767 0.692313 10.1406 0.692313H9.11849C8.48232 0.692313 8.16424 0.692313 7.92407 0.86648C7.68482 1.03881 7.58491 1.34131 7.38324 1.94631L7.07707 2.86115C6.93671 3.2262 6.68329 3.5368 6.35382 3.74756L6.04491 3.92631C5.66174 4.1234 5.21991 4.1784 4.80007 4.08215L3.68174 3.7659C3.02266 3.57981 2.69358 3.48631 2.40299 3.60456C2.11149 3.72281 1.94008 4.01981 1.59816 4.6129L1.14624 5.39848C0.825409 5.95581 0.664992 6.23356 0.696159 6.52964C0.727326 6.82664 0.941826 7.06498 1.37083 7.54256L2.31591 8.59948C2.54691 8.89189 2.71099 9.40156 2.71099 9.85989C2.71099 10.3182 2.54691 10.8279 2.31683 11.1203L1.37083 12.1763C0.941826 12.6539 0.727326 12.8931 0.696159 13.1892C0.664992 13.4853 0.824492 13.764 1.14533 14.3204L1.59816 15.106C1.94008 15.6991 2.11149 15.9961 2.40299 16.1143C2.69449 16.2326 3.02266 16.14 3.68174 15.953L4.80007 15.6376C5.22072 15.5414 5.66186 15.5965 6.04582 15.7935L6.35382 15.9713C6.68382 16.1821 6.93682 16.4938 7.07616 16.8586L7.38232 17.7726C7.58399 18.3776 7.68482 18.6801 7.92407 18.8542C8.16424 19.0266 8.48232 19.0266 9.11849 19.0266H10.1406C10.7767 19.0266 11.0957 19.0266 11.335 18.8533C11.5742 18.6801 11.6751 18.3776 11.8758 17.7726L12.1829 16.8586C12.3222 16.4929 12.5752 16.1821 12.9052 15.9713L13.2132 15.7935C13.5982 15.5964 14.0382 15.5405 14.4599 15.6376L15.5782 15.953C16.2364 16.14 16.5655 16.2335 16.8561 16.1152C17.1476 15.9961 17.319 15.6991 17.6609 15.106L18.1128 14.3204C18.4337 13.764 18.5941 13.4862 18.5629 13.1892C18.5317 12.8922 18.3172 12.6539 17.8882 12.1763L16.9432 11.1203C16.7122 10.827 16.5481 10.3182 16.5481 9.85989C16.5481 9.40156 16.7122 8.89189 16.9422 8.59948L17.8882 7.54256C18.3172 7.06589 18.5317 6.82664 18.5629 6.52964C18.5941 6.23264 18.4346 5.95581 18.1137 5.39848Z",
  p1c704900: "M12.8004 9.85182C12.8004 10.7027 12.4624 11.5188 11.8607 12.1205C11.259 12.7221 10.443 13.0602 9.59206 13.0602C8.74116 13.0602 7.92511 12.7221 7.32343 12.1205C6.72175 11.5188 6.38373 10.7027 6.38373 9.85182C6.38373 9.00092 6.72175 8.18486 7.32343 7.58318C7.92511 6.98151 8.74116 6.64349 9.59206 6.64349C10.443 6.64349 11.259 6.98151 11.8607 7.58318C12.4624 8.18486 12.8004 9.00092 12.8004 9.85182Z",
  p1afb7800: "M16.3451 12.4859C16.3668 12.4265 16.4063 12.3751 16.4582 12.3388C16.5101 12.3026 16.5719 12.2831 16.6352 12.2831C16.6985 12.2831 16.7603 12.3026 16.8122 12.3388C16.8641 12.3751 16.9036 12.4265 16.9253 12.4859L17.2205 13.2926C17.4519 13.9251 17.8184 14.4995 18.2947 14.9757C18.7709 15.452 19.3453 15.8186 19.9778 16.0499L20.7845 16.3451C20.844 16.3668 20.8953 16.4063 20.9316 16.4582C20.9679 16.5101 20.9873 16.5719 20.9873 16.6352C20.9873 16.6985 20.9679 16.7603 20.9316 16.8122C20.8953 16.8641 20.844 16.9036 20.7845 16.9253L19.9778 17.2205C19.3453 17.4519 18.7709 17.8184 18.2947 18.2947C17.8184 18.7709 17.4519 19.3453 17.2205 19.9778L16.9253 20.7845C16.9036 20.844 16.8641 20.8953 16.8122 20.9316C16.7603 20.9679 16.6985 20.9873 16.6352 20.9873C16.5719 20.9873 16.5101 20.9679 16.4582 20.9316C16.4063 20.8953 16.3668 20.844 16.3451 20.7845L16.0499 19.9778C15.8186 19.3453 15.452 18.7709 14.9757 18.2947C14.4995 17.8184 13.9251 17.4519 13.2926 17.2205L12.4859 16.9253C12.4265 16.9036 12.3751 16.8641 12.3388 16.8122C12.3026 16.7603 12.2831 16.6985 12.2831 16.6352C12.2831 16.5719 12.3026 16.5101 12.3388 16.4582C12.3751 16.4063 12.4265 16.3668 12.4859 16.3451L13.2926 16.0499C13.9251 15.8186 14.4995 15.452 14.9757 14.9757C15.452 14.4995 15.8186 13.9251 16.0499 13.2926L16.3451 12.4859Z",
  p173f9600: "M1.83203 17.6458V4.35417C1.83203 3.46867 2.5507 2.75 3.4362 2.75H7.99295C8.25445 2.74992 8.51201 2.81377 8.74319 2.93599C8.97438 3.05822 9.17218 3.2351 9.31936 3.45125L10.6064 5.34233C10.6494 5.40558 10.7209 5.44317 10.7961 5.44317H18.5612C19.4467 5.44317 20.1654 6.16092 20.1654 7.04733V12.3466C20.1654 12.5289 20.0929 12.7038 19.964 12.8327C19.8351 12.9617 19.6602 13.0341 19.4779 13.0341C19.2955 13.0341 19.1207 12.9617 18.9917 12.8327C18.8628 12.7038 18.7904 12.5289 18.7904 12.3466V7.04733C18.7904 6.98655 18.7662 6.92827 18.7232 6.88529C18.6803 6.84231 18.622 6.81817 18.5612 6.81817H10.7961C10.5346 6.81825 10.2771 6.75439 10.0459 6.63217C9.81469 6.50995 9.61689 6.33306 9.4697 6.11692L8.1827 4.22492C8.16162 4.19405 8.13331 4.16881 8.10023 4.15139C8.06716 4.13398 8.03033 4.12492 7.99295 4.125H3.4362C3.37542 4.125 3.31713 4.14914 3.27415 4.19212C3.23118 4.2351 3.20703 4.29339 3.20703 4.35417V17.6458C3.20703 17.7723 3.3097 17.875 3.4362 17.875H10.9987C11.181 17.875 11.3559 17.9474 11.4848 18.0764C11.6138 18.2053 11.6862 18.3802 11.6862 18.5625C11.6862 18.7448 11.6138 18.9197 11.4848 19.0486C11.3559 19.1776 11.181 19.25 10.9987 19.25H3.4362C3.01075 19.25 2.60272 19.081 2.30188 18.7802C2.00104 18.4793 1.83203 18.0713 1.83203 17.6458Z",
  p180d6180: "M6.12608 5.67768C5.99283 5.81833 5.91797 6.0091 5.91797 6.20801C5.91797 6.40692 5.99283 6.59769 6.12608 6.73834C6.25933 6.87899 6.44005 6.95801 6.6285 6.95801H14.2074C14.3959 6.95801 14.5766 6.87899 14.7099 6.73834C14.8431 6.59769 14.918 6.40692 14.918 6.20801C14.918 6.0091 14.8431 5.81833 14.7099 5.67768C14.5766 5.53703 14.3959 5.45801 14.2074 5.45801H6.6285C6.44005 5.45801 6.25933 5.53703 6.12608 5.67768Z",
  p29f8e800: "M6.12608 9.17768C5.99283 9.31833 5.91797 9.5091 5.91797 9.70801C5.91797 9.90692 5.99283 10.0977 6.12608 10.2383C6.25933 10.379 6.44005 10.458 6.6285 10.458H11.839C12.0275 10.458 12.2082 10.379 12.3414 10.2383C12.4747 10.0977 12.5495 9.90692 12.5495 9.70801C12.5495 9.5091 12.4747 9.31833 12.3414 9.17768C12.2082 9.03703 12.0275 8.95801 11.839 8.95801H6.6285C6.44005 8.95801 6.25933 9.03703 6.12608 9.17768Z",
  p2c77f900: "M0.75 8.08334C0.75 7.37751 0.761917 6.68726 0.786667 6.02084C0.86275 3.84559 0.90125 2.75751 1.78583 1.86559C2.67042 0.974594 3.78967 0.926928 6.02633 0.830678C7.32239 0.776265 8.61946 0.74937 9.91667 0.750011C11.2733 0.750011 12.5796 0.777511 13.807 0.830678C16.0437 0.926928 17.162 0.974594 18.0475 1.86651C18.9321 2.75751 18.9706 3.84559 19.0467 6.02084C19.095 7.39542 19.095 8.77127 19.0467 10.1458C18.9706 12.3211 18.9321 13.4092 18.0475 14.3011C17.1629 15.1921 16.0437 15.2398 13.807 15.336C13.1336 15.3647 12.4384 15.3861 11.7216 15.4002C11.0433 15.413 10.7032 15.4185 10.4043 15.5331C10.1055 15.6477 9.85433 15.8613 9.352 16.2921L7.35458 18.0063C7.25737 18.0896 7.1383 18.1432 7.01151 18.1609C6.88471 18.1786 6.75551 18.1595 6.63923 18.1059C6.52295 18.0524 6.42447 17.9666 6.35548 17.8587C6.28649 17.7509 6.24988 17.6255 6.25 17.4975V15.3452L6.02633 15.336C3.78967 15.2398 2.67133 15.1921 1.78583 14.3002C0.90125 13.4092 0.86275 12.3211 0.786667 10.1458C0.762358 9.45861 0.750133 8.77101 0.75 8.08334Z",
  p2f0d6880: "M0.750001 9.45833C0.750001 5.3535 0.750001 3.30017 2.02508 2.02508C3.30017 0.750001 5.35258 0.750001 9.45833 0.750001C13.5632 0.750001 15.6165 0.750001 16.8916 2.02508C18.1667 3.30017 18.1667 5.35258 18.1667 9.45833C18.1667 13.5632 18.1667 15.6165 16.8916 16.8916C15.6165 18.1667 13.5641 18.1667 9.45833 18.1667C5.3535 18.1667 3.30017 18.1667 2.02508 16.8916C0.750001 15.6165 0.750001 13.5641 0.750001 9.45833Z",
  p36eb6500: "M9.82629 6.0648L12.503 5.17288C13.3151 4.90155 13.7221 4.7668 13.9366 4.98038C14.1502 5.19488 14.0155 5.60096 13.7441 6.41405L12.8522 9.09071C12.3911 10.4749 12.1601 11.167 11.6633 11.6629C11.1674 12.1597 10.4753 12.3907 9.09112 12.8518L6.41445 13.7437C5.60137 14.015 5.19529 14.1507 4.98079 13.9362C4.76629 13.7217 4.90195 13.3147 5.17329 12.5025L6.0652 9.82588C6.52629 8.44171 6.75729 7.74963 7.25412 7.25371C7.75004 6.75688 8.44212 6.52588 9.82629 6.0648Z",
  p394dc300: "M4.00001 6.58975C4.00019 6.39534 4.07354 6.20811 4.20546 6.0653C4.34925 5.91053 4.54771 5.81791 4.7587 5.80711C4.96968 5.79632 5.17656 5.8682 5.3354 6.00749L7.99995 8.36029L10.6641 6.00213C10.8227 5.86264 11.0295 5.79048 11.2405 5.80099C11.4515 5.81149 11.65 5.90384 11.794 6.05841C11.8642 6.13427 11.9185 6.22342 11.9537 6.3206C11.9889 6.41779 12.0043 6.52104 11.999 6.62426C11.9936 6.72748 11.9676 6.82859 11.9226 6.92161C11.8775 7.01463 11.8143 7.09769 11.7366 7.16589L8.53699 9.99789C8.38885 10.128 8.19845 10.1998 8.00127 10.2C7.80409 10.2001 7.61358 10.1286 7.46524 9.99869L4.26443 7.1728C4.18141 7.10002 4.11487 7.01037 4.06927 6.90982C4.02367 6.80928 4.00006 6.70015 4.00001 6.58975V6.58975Z",
};

// --- Components ---

function BasilSearchOutline() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="basil:search-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="basil:search-outline">
          <path clipRule="evenodd" d={svgPaths.p1d98d580} fill="var(--fill-0, #D0D0D4)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilledButtonsPrimary() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter basis-0 grow min-h-px min-w-px relative rounded-[32px] shrink-0" data-name="Filled Buttons/Primary" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 184 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(32.847 6.4452 -33.953 4.1838 -165.4 -28.452)\\\'><stop stop-color=\\\'rgba(77,58,92,0.4)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(122,107,133,0.3)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(166,157,174,0.2)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[20px] py-[10px] relative w-full">
          <BasilSearchOutline />
          <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#d0d0d4] text-[11px] text-nowrap tracking-[0.22px]">Search</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="Group">
            <path d={svgPaths.p24451380} id="Vector" stroke="var(--stroke-0, #D0D0D4)" strokeLinecap="round" strokeLinejoin="round" />
            <g id="Vector_2">
              <path d={svgPaths.p122aa200} fill="var(--fill-0, #D0D0D4)" />
              <path d={svgPaths.p3a0cf00} fill="var(--fill-0, #D0D0D4)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsChatAdd() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="hugeicons:chat-add-01">
      <Group2 />
    </div>
  );
}

function FilledButtonsPrimary1() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter content-stretch flex items-center p-[10px] relative rounded-[100px] shrink-0 w-[36px]" data-name="Filled Buttons/Primary" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 36 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(6.4265 6.4452 -6.6429 4.1838 -32.361 -28.452)\\\'><stop stop-color=\\\'rgba(77,58,92,0.4)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(122,107,133,0.3)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(166,157,174,0.2)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <HugeiconsChatAdd />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <FilledButtonsPrimary />
      <FilledButtonsPrimary1 />
    </div>
  );
}

function MaterialSymbolsLightHomeOutlineRounded() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="material-symbols-light:home-outline-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="material-symbols-light:home-outline-rounded">
          <path d={svgPaths.p11ebb000} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#27272a] relative rounded-[100px] shadow-[0px_0px_14px_0px_rgba(0,0,0,0.04)] shrink-0 w-full cursor-pointer hover:bg-[#333336] transition-colors"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <MaterialSymbolsLightHomeOutlineRounded />
          <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.52px]">
            <p className="leading-[1.2]">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[10.42%_10.41%_10.42%_10.42%]" data-name="Group">
      <div className="absolute inset-[-4.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <g id="Group">
            <path d={svgPaths.p36eb6500} id="Vector" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p26844d00} id="Vector_2" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2f0d6880} id="Vector_3" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsDiscoverSquare() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="hugeicons:discover-square">
      <Group3 />
    </div>
  );
}

function Frame12({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-[100px] shrink-0 w-full cursor-pointer hover:bg-[#ffffff0d] transition-colors"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <HugeiconsDiscoverSquare />
          <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.52px]">
            <p className="leading-[1.2]">Discover</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OcticonSpace() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="octicon:space-24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="octicon:space-24">
          <path d={svgPaths.p1afb7800} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.p173f9600} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-[100px] shrink-0 w-full cursor-pointer hover:bg-[#ffffff0d] transition-colors"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[6px] relative w-full">
          <OcticonSpace />
          <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.52px]">
            <p className="leading-[1.2]">My Spaces</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[10.42%_8.34%_10.41%_8.33%]" data-name="Group">
      <div className="absolute inset-[-4.31%_-4.09%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <g id="Group">
            <path d={svgPaths.p2c77f900} id="Vector" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Vector_2">
              <path d={svgPaths.p180d6180} fill="var(--fill-0, #FCFCFC)" />
              <path d={svgPaths.p29f8e800} fill="var(--fill-0, #FCFCFC)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsChatOutcome() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="hugeicons:chat-outcome">
      <Group4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <HugeiconsChatOutcome />
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.52px]">
        <p className="leading-[1.2]">Chats</p>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative size-[16px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron">
          <path d={svgPaths.p394dc300} fill="var(--fill-0, #FAF5FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13({ onClick, isExpanded }: { onClick?: () => void, isExpanded?: boolean }) {
  return (
    <div onClick={onClick} className="relative shrink-0 w-full cursor-pointer hover:bg-[#ffffff0d] transition-colors rounded-[8px]">
      <div aria-hidden="true" className="absolute border-[#424242] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[14px] pt-[6px] px-[10px] relative w-full">
          <Frame21 />
          <div className="flex items-center justify-center relative shrink-0">
            <motion.div
              className="flex-none"
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.2 }}
            >
              <Chevron />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15({ onChatClick, threads }: { onChatClick?: (chatId: string) => void, threads: ChatThread[] }) {
  const chatConversations = threads.map(t => ({ id: t.id, title: t.title }));

  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Urbanist:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] px-[10px] py-0 relative text-[#a1a1aa] text-[13px] text-nowrap w-full">
          {chatConversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onChatClick?.(chat.id)}
              className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 tracking-[0.26px] cursor-pointer hover:text-white transition-colors w-full"
            >
              <p className="leading-[1.5] overflow-ellipsis overflow-hidden text-[13px] text-nowrap">{chat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame17({ isExpanded, onToggle, onChatClick, threads }: { isExpanded?: boolean, onToggle?: () => void, onChatClick?: (chatId: string) => void, threads: ChatThread[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full">
      <Frame13 onClick={onToggle} isExpanded={isExpanded} />
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <Frame15 onChatClick={onChatClick} threads={threads} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Frame14({ onSelectSpaces, onSelectHome, onSelectDiscover, chatsExpanded, onToggleChats, onChatClick, threads }: {
  onSelectSpaces?: () => void,
  onSelectHome?: () => void,
  onSelectDiscover?: () => void,
  chatsExpanded?: boolean,
  onToggleChats?: () => void,
  onChatClick?: (chatId: string) => void,
  threads: ChatThread[]
}) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame11 onClick={onSelectHome} />
      <Frame12 onClick={onSelectDiscover} />
      <Frame18 onClick={onSelectSpaces} />
      <Frame17 isExpanded={chatsExpanded} onToggle={onToggleChats} onChatClick={onChatClick} threads={threads} />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 cursor-pointer">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full" height="40" src={imgEllipse772} width="40" />
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcfcfc] text-[13px] text-nowrap tracking-[0.52px]">
        <p className="leading-[1.2]">Finance Flow</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.36%_9.11%_8.3%_9.64%]" data-name="Group">
      <div className="absolute inset-[-3.78%_-3.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p209b0e00} id="Vector" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38462" />
            <path d={svgPaths.p1c704900} id="Vector_2" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38462" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsSettings() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="hugeicons:settings-01">
      <Group5 />
    </div>
  );
}

function Frame7({ onSettings }: { onSettings?: () => void }) {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-between left-0 px-[20px] py-[22px] w-[270px]">
      <div aria-hidden="true" className="absolute border-[#424242] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <div className="flex items-center gap-4">
        <button
          onClick={onSettings}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <HugeiconsSettings />
        </button>
      </div>
    </div>
  );
}

export default function AvatarSideMenu({ onClose, onSelectSpaces, onSelectHome, onSelectDiscover, onChatClick, onSettings, threads }: {
  onClose?: () => void,
  onSelectSpaces?: () => void,
  onSelectHome?: () => void,
  onSelectDiscover?: () => void,
  onChatClick?: (chatId: string) => void,
  onSettings?: () => void,
  threads: ChatThread[]
}) {
  const [chatsExpanded, setChatsExpanded] = useState(true); // Start expanded to match screenshot

  const handleToggleChats = () => {
    setChatsExpanded(!chatsExpanded);
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-[100] backdrop-blur-[20px] backdrop-filter bg-[rgba(26,26,28,0.95)] content-stretch flex flex-col gap-[40px] h-full items-start left-0 pb-0 pt-[22px] px-[20px] top-0 w-[270px] border-r border-[#ffffff10] shadow-2xl"
      data-name="Side Menu"
    >
      {/* Click outside listener overlay would be handled by parent or a separate overlay element */}
      <Frame16 />
      <Frame14
        onSelectSpaces={onSelectSpaces}
        onSelectHome={onSelectHome}
        onSelectDiscover={onSelectDiscover}
        chatsExpanded={chatsExpanded}
        onToggleChats={handleToggleChats}
        onChatClick={onChatClick}
        threads={threads}
      />
      <Frame7 onSettings={onSettings} />
    </motion.div>
  );
}
