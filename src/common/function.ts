import { indexOf } from "lodash"

export const reducer = (prevState: any, currentState: any) => ({
    ...prevState,
    ...currentState
})

export const patternRule = {
    notOnlySpace: (mess: string) => ({
      pattern: '[^\\s+$]',
      message: mess || 'Tên không hợp lệ'
    }),
    preSpace: (mess: string) => ({
      pattern: /^\S/,
      message: mess || 'Không được có dấu cách đầu dòng'
    }),
    required: (mess: string) => ({
      required: true,
      message: mess || 'Không được để trống!'
    }),
    notBracket: (mess: string) => ({
      pattern: /^[^()]+$/,
      message: mess || 'Vui lòng không sử dụng dấu đóng mở ngoặc tròn'
    }),
    email: (mess: string) => ({
      type: 'email',
      message: mess || 'Vui lòng nhập chính xác email'
    }),
    notCharacter: (mess: string) => ({
      pattern: /^\d+$/,
      message: mess || 'Chỉ cho phép nhập số'
    })
  }

  export const checkPermission = (permissions: string[], permission: string) => indexOf(permissions, permission) !== -1