import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faImages } from '@fortawesome/free-solid-svg-icons'
import Listing from './Listing'
import SEO from './SEO'
import Footer from './Footer'
import Header from './Header'
import SliceZone from './SliceZone'
import Title from './Title'
import Layout from './Layout'
import Wrapper from './Wrapper'
import SocialLink from './SocialLink'

library.add(fab, faEnvelope, faImages)

export { Footer, Layout, Listing, SEO, Wrapper, SliceZone, Title, Header, SocialLink }
