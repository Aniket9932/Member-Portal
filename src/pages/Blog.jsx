import { Heading, HStack, chakra, Button } from '@chakra-ui/react'
import React from 'react'
import { GrArticle } from 'react-icons/gr'
import Cards from '../components/Cards'

function Blog() {
  return (
    <chakra.div bgImage={'https://coolbackgrounds.io/images/backgrounds/index/disco-dba865f1.png'} minH='100vh'>

        <Heading textAlign={'left'} fontSize='3xl' p={10} >Featured Stories</Heading><br/>
        <HStack justify={'space-evenly'}>

            <Cards src='https://www.centene.com/content/dam/centenedotcom/images/featured-stories/mature-men-race.png' text='Supporting Healthy Aging Through Whole Health Solutions' link='https://www.centene.com/news/supporting-healthy-aging-through-whole-health-solutions.html'/>
            <Cards src='https://www.centene.com/content/dam/centenedotcom/images/featured-stories/support-group-members-hug.jpg' text='Increasing Access to Suicide Prevention Care Saves Lives' link='https://www.centene.com/news/increasing-access-to-suicide-prevention-care-saves-lives.html'/>
            <Cards src='https://www.centene.com/content/dam/centenedotcom/images/featured-stories/child-vaccination-pediatrician.jpg' text='Improving Vaccination Rates Through Immunization Education' link='https://www.centene.com/news/improving-vaccination-rates-through-immunization-education.html'/>   

        </HStack>
        <Button p={5} ml='110px' mt={12} bgColor='pink' rightIcon={<GrArticle/>}>View all News</Button>
         
    </chakra.div>
  )
}

export default Blog