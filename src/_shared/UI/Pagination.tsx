import { ChangeEvent } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { Shape, Variant } from "./helpers/types";
import { Select } from "./Select";
import WaveEffect from "./WaveEffect";

type PaginationProps = {
  total: number;
  limit?: number;
  page: number;
  onPageChange: (e: ChangeEvent<unknown>, page: number) => void;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  hideFirstButton?: boolean;
  hideLastButton?: boolean;
  $shape?: Shape;
  $fixedSize?: boolean;
  $fill?: boolean;
  $variant?: Variant;
  maxPage?: number;
  hideLimitOptions?: boolean;
};

type PaginationContainerProps = {
  $shape?: Shape;
  $fixedSize?: boolean;
  $fill?: boolean;
  $variant?: Variant;
  $active?: boolean;
};
export const PaginationContainer = styled.ul<PaginationContainerProps>`
  ${({
    theme,
    $shape = "circle",
    $fixedSize,
    $fill = true,
    $variant = "success",
    $active,
  }) => `
 margin: -${theme.pagination.margin.y} -${theme.pagination.margin.x};
`}
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

type PaginationItemProps = {
  $active?: boolean;
  disabled?: boolean;
  $variant?: Variant;
  $fill?: boolean;
  $shape?: Shape;
  $fixedSize?: boolean;
};
export const PaginationItem = styled.li<PaginationItemProps>`
  flex: 0 0 auto;
  padding: 0;
  text-align: center;
  display: inline-flex;
  cursor: pointer;
  // border: 1px solid transparent;
  outline: none;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  ${({
    $active,
    theme,
    disabled,
    $variant = "success",
    $fill = true,
    $shape = "rounded",
    $fixedSize,
  }) => `

   ${
     $fixedSize
       ? `
                justify-content: center;
                align-items: center;
                width: ${theme.pagination.fixedSize};
                height: ${theme.pagination.fixedSize};
            `
       : `
                padding: ${theme.pagination.padding.y} ${theme.pagination.padding.x};
            `
   }
                    ${
                      $fill
                        ? `
                background: ${theme.type[$variant].main};
                color: ${theme.type[$variant].font};
                fill: ${theme.type[$variant].font};
        
                &:hover{
                  border-color: ${theme.type[$variant].darkest};
                  background: ${theme.type[$variant].dark};  
                }
                  ${
                    $active
                      ? `
                  border-color: ${theme.type[$variant].darkest};
                  background: ${theme.type[$variant].dark};
               `
                      : ``
                  }
               `
                        : `
                border-color: transparent;
                background: ${theme?.type[$variant]?.pagination?.background};
                color: ${theme?.colors?.primary};
                fill: ${theme.type[$variant]?.pagination?.font};
        
                &:hover {
                  background: ${theme.type[$variant]?.pagination?.border};
                }
                 ${
                   $active
                     ? `
                  border-color: ${theme.type[$variant].dark};
                  background: ${theme.type[$variant].main} !important;
                  // color: ${theme.type[$variant].font};
                  color: yellow;

                  fill: ${theme.type[$variant].font};    
                  `
                     : ``
                 } 
        
            
            `
                    }

            margin: ${theme.pagination.margin.y} ${theme.pagination.margin.x};
            border-radius: ${theme.pagination.radius[$shape]};
            transition: ${theme.pagination.transition};
            transition-property: border, background, color, fill;
            ${
              disabled
                ? `
            opacity:0.7;
            background:${theme?.type[$variant]?.form?.disabledBackgroundColor}
            cursor: default;
            user-select: none;   
            pointer-events: none;

`
                : ``
            }
`}// height:30px;
// text-align:center;
// justify-content:center;
// align-items:center;
// display:inline-flex;
// cursor:pointer;
// &:first-child{
//    border-top-left-radius:3px;
//    border-bottom-left-radius:3px;

// }
// &:last-child{
//    border-top-right-radius:3px;
//    border-bottom-right-radius:3px;

// }
`;

const limitOptions = [
  {
    label: "10 / page",
    value: 10,
  },
  {
    label: "20 / page",
    value: 20,
  },
  {
    label: "50 / page",
    value: 50,
  },
  {
    label: "100 / page",
    value: 100,
  },
];

const StyledSelect = styled.select<PaginationItemProps>`
  width: 100%;
  height: 100%;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  ${({ theme, $variant = "primary", $fill = true, $fixedSize }) => `
height: ${theme.pagination.fixedSize};
 ${
   $fixedSize
     ? `
                justify-content: center;
                align-items: center;
               //  width: ${theme.pagination.fixedSize};
                height: ${theme.pagination.fixedSize};
            `
     : `
                padding: ${theme.pagination.padding.y} ${theme.pagination.padding.x};
            `
 }
   ${
     $fill
       ? `
                border-color: ${theme.type[$variant].dark};
                background: ${theme.type[$variant].main};
                color: ${theme.type[$variant].font};
                fill: ${theme.type[$variant].font};
                &:hover{
                  border-color: ${theme.type[$variant].darkest};
                  background: ${theme.type[$variant].dark};  
                }
               
      }
               `
       : `
                border-color: transparent;
                background: ${theme?.type[$variant]?.pagination?.background};
                color: ${theme.type[$variant]?.pagination?.font};
                fill: ${theme.type[$variant]?.pagination?.font};
        
                &:hover {
                  background: ${theme.type[$variant]?.pagination?.border};
                }
                
        
            
            `
   }

            border-radius:  ${theme.pagination.radius["rounded"]}
         
`}
`;

export const Pagination: React.FC<PaginationProps> = ({
  total,
  limit = 10,
  page,
  onPageChange,
  hideNextButton,
  hidePrevButton,
  maxPage = 5,
  hideFirstButton,
  hideLastButton,
  hideLimitOptions = true,
  ...props
}) => {
  const pageCount = Math.ceil(total / limit);
  const firstPage = 1;

  const onPrevButtonClick = (e: any) => {
    onPageChange(e, page - 1);
  };
  const onNextButtonClick = (e: any) => {
    onPageChange(e, page + 1);
  };
  const onPageButtonClick = (clickedItem: number) => (e: any) => {
    onPageChange(e, clickedItem);
  };

  let firstVisiblePage = Math.max(
    page - Math.floor((maxPage - 1) / 2),
    firstPage
  );
  const lastVisiblePage = Math.min(firstVisiblePage - 1 + maxPage, pageCount);
  firstVisiblePage = Math.max(lastVisiblePage + 1 - maxPage, firstPage);

  return (
    <PaginationContainer>
      {hidePrevButton ? null : (
        <WaveEffect>
          <PaginationItem
            {...props}
            disabled={page === 1}
            onClick={onPrevButtonClick}
            $active={false}
          >
            {props.$fixedSize ? "<" : "prev"}
          </PaginationItem>
        </WaveEffect>
      )}
      {hideFirstButton ? null : (
        <WaveEffect>
          <PaginationItem
            {...props}
            onClick={(e: any) => onPageChange(e, firstPage)}
            $active={false}
          >
            {"| <"}
          </PaginationItem>
        </WaveEffect>
      )}

      {Array(lastVisiblePage - firstVisiblePage + 1)
        .fill(lastVisiblePage - firstVisiblePage + 1)
        .map((v, i) => (
          <WaveEffect key={i}>
            <PaginationItem
              {...props}
              $active={i + firstVisiblePage === page}
              onClick={onPageButtonClick(i + firstVisiblePage)}
            >
              {i + firstVisiblePage}
            </PaginationItem>
          </WaveEffect>
        ))}
      {hideLastButton ? null : (
        <PaginationItem
          {...props}
          onClick={(e: any) => onPageChange(e, pageCount)}
          $active={false}
        >
          {"> |"}
        </PaginationItem>
      )}
      {hideNextButton ? null : (
        <PaginationItem
          {...props}
          disabled={page === pageCount}
          onClick={onNextButtonClick}
          $active={false}
        >
          {props?.$fixedSize ? ">" : "Next"}
        </PaginationItem>
      )}
      {hideLimitOptions ? null : (
        <Flex ml={3} width={100} alignItems="center" justifyContent="center">
          {/* <Select options={limitOptions} menuPosition="fixed" placeholder='5' isClearable={false} defaultValue={{ value: limit, label: limit }} /> */}
          <StyledSelect {...props} placeholder="5" defaultValue={limit}>
            {limitOptions.map((option, index) => (
              <option value={option.value}>{option?.label}</option>
            ))}
          </StyledSelect>
        </Flex>
      )}
    </PaginationContainer>
  );
};
