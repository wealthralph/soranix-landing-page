import { Badge, Box, Divider, Flex, Group, Paper, Text, ThemeIcon, Title } from '@mantine/core'
import styles from './Custom.module.css'
import { createContext, useContext } from 'react'
import { Icon3dRotate, IconAccessPoint } from '@tabler/icons-react'

const CustomNodeWrapperContext = createContext(undefined)

const useNodeWrapperContext = () => {
  const context = useContext(CustomNodeWrapperContext)

  if (!context) throw new Error("Node Wrapper must be used within a context")

  return context
}

const CustomNodeWrapper = ({ children, data }) => {
  return (
    <CustomNodeWrapperContext.Provider value={{ data }}>
      <div className={styles.custom_node_wrapper}>
        <Header/>
       {children}
      </div>
    </CustomNodeWrapperContext.Provider>
  )
}


const Header = ({ children }) => {

  const { data } = useNodeWrapperContext()

  return (
    <Paper mih={"24px"} w={"100%"} bg={'dark.6'}>
      <Flex justify={'space-between'} p={'xs'} align={'center'}>
        <Group gap={'xs'}>
          <ThemeIcon color='orange' size={'sm'} variant='light'>
            <IconAccessPoint size={16}/>
          </ThemeIcon>
          <Text fw={'bold'} size='sm'>{data?.type}</Text>
        </Group>
        <Badge variant='default' radius={'sm'} size='md'>{data?.event}</Badge>
      </Flex>
      <Divider/>
    </Paper>
  )
}

export const Body = ({ children}) => {

  return (
    <>{children}</>
  )
}

CustomNodeWrapper.Header = Header
CustomNodeWrapper.Body = Body

export default CustomNodeWrapper